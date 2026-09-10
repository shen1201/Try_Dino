const GROWTH_STORAGE_KEY = 'dinoMutantGrowthLog';

let growthRecords = [];
let editingDate = null; // 目前正在編輯哪一筆的原始日期，null 代表新增模式

function loadGrowthRecords() {
  try {
    const raw = localStorage.getItem(GROWTH_STORAGE_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch (err) {
    console.error("讀取成長紀錄失敗", err);
    return [];
  }
}

function saveGrowthRecords() {
  try {
    localStorage.setItem(GROWTH_STORAGE_KEY, JSON.stringify(growthRecords));
  } catch (err) {
    console.error("儲存成長紀錄失敗", err);
  }
}

function getTodayStr() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function computeLevel(atk, hp, speed) {
  return atk + hp / 10 + speed;
}

function formatDateTime(iso) {
  if (!iso) return '-';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '-';
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

// ===== 新增／編輯／刪除 =====

function submitGrowthForm() {
  const date = document.getElementById('growthDateInput').value;
  const atk = parseInt(document.getElementById('growthAtkInput').value, 10) || 0;
  const hp = parseInt(document.getElementById('growthHpInput').value, 10) || 0;
  const speed = parseInt(document.getElementById('growthSpeedInput').value, 10) || 0;

  if (!date) {
    alert(t('growth.alertNoDate'));
    return;
  }

  const now = new Date().toISOString();

  // 編輯模式下若日期被改動，先移除原本那筆紀錄
  if (editingDate && editingDate !== date) {
    growthRecords = growthRecords.filter((r) => r.date !== editingDate);
  }

  const existingIndex = growthRecords.findIndex((r) => r.date === date);
  if (existingIndex >= 0) {
    // 新增模式下撞到已存在的日期，先跟使用者確認是否覆蓋
    if (!editingDate && !confirm(t('growth.confirmOverwrite', { date }))) return;
    growthRecords[existingIndex] = {
      ...growthRecords[existingIndex],
      atk,
      hp,
      speed,
      updatedAt: now
    };
  } else {
    growthRecords.push({ date, atk, hp, speed, createdAt: now, updatedAt: now });
  }

  growthRecords.sort((a, b) => a.date.localeCompare(b.date));
  saveGrowthRecords();

  cancelEdit();
  renderGrowthTable();
  updateDateRangeDefaults();
  renderGrowthChart();
}

function startEditRecord(date) {
  const rec = growthRecords.find((r) => r.date === date);
  if (!rec) return;

  editingDate = date;
  document.getElementById('growthDateInput').value = rec.date;
  document.getElementById('growthAtkInput').value = rec.atk;
  document.getElementById('growthHpInput').value = rec.hp;
  document.getElementById('growthSpeedInput').value = rec.speed;
  document.getElementById('growthFormSubmitBtn').textContent = t('growth.updateBtn');
  document.getElementById('growthCancelEditBtn').hidden = false;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cancelEdit() {
  editingDate = null;
  document.getElementById('growthDateInput').value = getTodayStr();
  document.getElementById('growthAtkInput').value = '';
  document.getElementById('growthHpInput').value = '';
  document.getElementById('growthSpeedInput').value = '';
  document.getElementById('growthFormSubmitBtn').textContent = t('growth.addBtn');
  document.getElementById('growthCancelEditBtn').hidden = true;
}

function deleteRecord(date) {
  if (!confirm(t('growth.confirmDelete', { date }))) return;

  growthRecords = growthRecords.filter((r) => r.date !== date);
  saveGrowthRecords();

  if (editingDate === date) cancelEdit();

  renderGrowthTable();
  updateDateRangeDefaults();
  renderGrowthChart();
}

// ===== 列表渲染 =====

function renderGrowthTable() {
  const tbody = document.getElementById('growthTableBody');

  if (growthRecords.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="color:#666; text-align:center; padding:12px;">${t('growth.empty')}</td></tr>`;
    return;
  }

  const sortedDesc = [...growthRecords].sort((a, b) => b.date.localeCompare(a.date));
  tbody.innerHTML = sortedDesc.map((r) => {
    const level = Math.round(computeLevel(r.atk, r.hp, r.speed));
    return `<tr>
      <td>${r.date}</td>
      <td>${r.atk.toLocaleString()}</td>
      <td>${r.hp.toLocaleString()}</td>
      <td>${r.speed.toLocaleString()}</td>
      <td>${level.toLocaleString()}</td>
      <td>${formatDateTime(r.createdAt)}</td>
      <td>${formatDateTime(r.updatedAt)}</td>
      <td>
        <span class="growth-action-edit" onclick="startEditRecord('${r.date}')">${t('growth.edit')}</span>
        <span class="growth-action-delete" onclick="deleteRecord('${r.date}')">${t('growth.delete')}</span>
      </td>
    </tr>`;
  }).join('');
}

// ===== 日期範圍 =====
// 只要使用者還沒手動改過範圍，新增/刪除紀錄時就持續讓範圍跟著「最早那筆紀錄 ~ 今天」自動更新；
// 使用者一旦自己改過範圍輸入框，就不再自動覆蓋，直到按下「重設為預設範圍」。
let dateRangeUserModified = false;

function updateDateRangeDefaults() {
  if (dateRangeUserModified) return;
  document.getElementById('growthRangeStart').value = growthRecords.length ? growthRecords[0].date : getTodayStr();
  document.getElementById('growthRangeEnd').value = getTodayStr();
}

function onDateRangeChanged() {
  dateRangeUserModified = true;
  renderGrowthChart();
}

function resetDateRange() {
  dateRangeUserModified = false;
  updateDateRangeDefaults();
  renderGrowthChart();
}

// ===== 折線圖 (純 SVG 手繪，不依賴外部圖表庫) =====

// 存放目前圖表的座標換算資訊，滑鼠 hover 時用來找最近的那一天並畫出提示框
let chartState = null;

const CHART_COLORS = { atk: '#76c720', hp10: '#00e5ff', speed: '#ffca28', level: '#ff5470' };

function renderGrowthChart() {
  const svg = document.getElementById('growthChartSvg');
  const emptyMsg = document.getElementById('growthChartEmpty');
  const startStr = document.getElementById('growthRangeStart').value;
  const endStr = document.getElementById('growthRangeEnd').value;

  const filtered = growthRecords
    .filter((r) => (!startStr || r.date >= startStr) && (!endStr || r.date <= endStr))
    .sort((a, b) => a.date.localeCompare(b.date));

  chartState = null;
  hideChartTooltip();

  if (filtered.length === 0) {
    svg.innerHTML = '';
    emptyMsg.hidden = false;
    return;
  }
  emptyMsg.hidden = true;

  const W = 760, H = 320;
  const padL = 56, padR = 16, padT = 20, padB = 40;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  const dates = filtered.map((r) => new Date(r.date + 'T00:00:00').getTime());
  const minDate = Math.min(...dates);
  const maxDate = Math.max(...dates);
  const dateSpan = Math.max(maxDate - minDate, 1);

  const series = {
    atk: filtered.map((r) => r.atk),
    hp10: filtered.map((r) => r.hp / 10),
    speed: filtered.map((r) => r.speed),
    level: filtered.map((r) => r.atk + r.hp / 10 + r.speed)
  };

  const allValues = [...series.atk, ...series.hp10, ...series.speed, ...series.level];
  let minV = Math.min(0, ...allValues);
  let maxV = Math.max(...allValues);
  if (minV === maxV) maxV = minV + 1;
  const valPad = (maxV - minV) * 0.08;
  minV -= valPad;
  maxV += valPad;

  const xFor = (i) => {
    const frac = filtered.length === 1 ? 0.5 : (dates[i] - minDate) / dateSpan;
    return padL + frac * chartW;
  };
  const yFor = (v) => padT + chartH - ((v - minV) / (maxV - minV)) * chartH;

  const pointsFor = (arr) => arr.map((v, i) => `${xFor(i).toFixed(1)},${yFor(v).toFixed(1)}`).join(' ');
  const dotsFor = (arr, color) => arr.map((v, i) =>
    `<circle cx="${xFor(i).toFixed(1)}" cy="${yFor(v).toFixed(1)}" r="2.5" fill="${color}" />`
  ).join('');

  const gridSteps = 5;
  let gridLines = '';
  let yLabels = '';
  for (let s = 0; s <= gridSteps; s++) {
    const v = minV + (maxV - minV) * (s / gridSteps);
    const y = yFor(v);
    gridLines += `<line x1="${padL}" y1="${y.toFixed(1)}" x2="${W - padR}" y2="${y.toFixed(1)}" stroke="#2a2d3a" stroke-width="1" />`;
    yLabels += `<text x="${padL - 8}" y="${(y + 4).toFixed(1)}" text-anchor="end" font-size="10" fill="#8b8fa8">${Math.round(v).toLocaleString()}</text>`;
  }

  const maxLabels = Math.min(6, filtered.length);
  let xLabels = '';
  for (let i = 0; i < maxLabels; i++) {
    const idx = Math.round(i * (filtered.length - 1) / Math.max(maxLabels - 1, 1));
    const x = xFor(idx);
    xLabels += `<text x="${x.toFixed(1)}" y="${H - padB + 18}" text-anchor="middle" font-size="10" fill="#8b8fa8">${filtered[idx].date.slice(5)}</text>`;
  }

  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.innerHTML = `
    ${gridLines}
    <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${H - padB}" stroke="#3a3d52" stroke-width="1.5" />
    <line x1="${padL}" y1="${H - padB}" x2="${W - padR}" y2="${H - padB}" stroke="#3a3d52" stroke-width="1.5" />
    ${yLabels}
    ${xLabels}
    <polyline points="${pointsFor(series.atk)}" fill="none" stroke="${CHART_COLORS.atk}" stroke-width="2" />
    ${dotsFor(series.atk, CHART_COLORS.atk)}
    <polyline points="${pointsFor(series.hp10)}" fill="none" stroke="${CHART_COLORS.hp10}" stroke-width="2" />
    ${dotsFor(series.hp10, CHART_COLORS.hp10)}
    <polyline points="${pointsFor(series.speed)}" fill="none" stroke="${CHART_COLORS.speed}" stroke-width="2" />
    ${dotsFor(series.speed, CHART_COLORS.speed)}
    <polyline points="${pointsFor(series.level)}" fill="none" stroke="${CHART_COLORS.level}" stroke-width="2.5" />
    ${dotsFor(series.level, CHART_COLORS.level)}
    <g id="growthChartHoverGuide" visibility="hidden">
      <line id="growthChartHoverLine" x1="0" y1="${padT}" x2="0" y2="${H - padB}" stroke="#8b8fa8" stroke-width="1" stroke-dasharray="4,3" />
      <circle id="growthChartHoverDot-atk" r="4.5" fill="${CHART_COLORS.atk}" stroke="#fff" stroke-width="1.5" />
      <circle id="growthChartHoverDot-hp10" r="4.5" fill="${CHART_COLORS.hp10}" stroke="#fff" stroke-width="1.5" />
      <circle id="growthChartHoverDot-speed" r="4.5" fill="${CHART_COLORS.speed}" stroke="#fff" stroke-width="1.5" />
      <circle id="growthChartHoverDot-level" r="4.5" fill="${CHART_COLORS.level}" stroke="#fff" stroke-width="1.5" />
    </g>
    <rect x="${padL}" y="${padT}" width="${chartW}" height="${chartH}" fill="transparent" style="cursor:crosshair;" id="growthChartHoverArea" />
  `;

  chartState = {
    W, H, padT, padB, chartH,
    filtered,
    xs: filtered.map((_, i) => xFor(i)),
    ys: {
      atk: series.atk.map(yFor),
      hp10: series.hp10.map(yFor),
      speed: series.speed.map(yFor),
      level: series.level.map(yFor)
    },
    raw: series
  };

  const hoverArea = document.getElementById('growthChartHoverArea');
  hoverArea.addEventListener('mousemove', handleChartHover);
  hoverArea.addEventListener('mouseleave', hideChartTooltip);
}

function handleChartHover(event) {
  if (!chartState) return;
  const svg = document.getElementById('growthChartSvg');
  const rect = svg.getBoundingClientRect();
  if (rect.width === 0) return;

  const scaleX = chartState.W / rect.width;
  const mouseXInViewBox = (event.clientX - rect.left) * scaleX;

  let nearestIdx = 0;
  let nearestDiff = Infinity;
  chartState.xs.forEach((x, i) => {
    const diff = Math.abs(x - mouseXInViewBox);
    if (diff < nearestDiff) { nearestDiff = diff; nearestIdx = i; }
  });

  showChartTooltip(nearestIdx, rect);
}

function showChartTooltip(idx, svgRect) {
  const { filtered, xs, ys, raw, padT, chartH, W, H } = chartState;
  const x = xs[idx];

  const guide = document.getElementById('growthChartHoverGuide');
  guide.setAttribute('visibility', 'visible');
  document.getElementById('growthChartHoverLine').setAttribute('x1', x);
  document.getElementById('growthChartHoverLine').setAttribute('x2', x);
  ['atk', 'hp10', 'speed', 'level'].forEach((key) => {
    const dot = document.getElementById(`growthChartHoverDot-${key}`);
    dot.setAttribute('cx', x);
    dot.setAttribute('cy', ys[key][idx]);
  });

  const tooltip = document.getElementById('growthChartTooltip');
  tooltip.hidden = false;
  tooltip.innerHTML = `
    <div class="growth-tooltip-date">${filtered[idx].date}</div>
    <div class="growth-tooltip-row"><span class="growth-tooltip-dot" style="background:${CHART_COLORS.atk}"></span><span class="growth-tooltip-label">${t('growth.legendAtk')}</span><span class="growth-tooltip-value">${Math.round(raw.atk[idx]).toLocaleString()}</span></div>
    <div class="growth-tooltip-row"><span class="growth-tooltip-dot" style="background:${CHART_COLORS.hp10}"></span><span class="growth-tooltip-label">${t('growth.legendHp10')}</span><span class="growth-tooltip-value">${Math.round(raw.hp10[idx]).toLocaleString()}</span></div>
    <div class="growth-tooltip-row"><span class="growth-tooltip-dot" style="background:${CHART_COLORS.speed}"></span><span class="growth-tooltip-label">${t('growth.legendSpeed')}</span><span class="growth-tooltip-value">${Math.round(raw.speed[idx]).toLocaleString()}</span></div>
    <div class="growth-tooltip-row"><span class="growth-tooltip-dot" style="background:${CHART_COLORS.level}"></span><span class="growth-tooltip-label">${t('growth.legendLevel')}</span><span class="growth-tooltip-value">${Math.round(raw.level[idx]).toLocaleString()}</span></div>
  `;

  // 把 viewBox 座標換算回 wrap 容器裡的 CSS 像素位置
  const wrap = document.querySelector('.growth-chart-wrap');
  const wrapRect = wrap.getBoundingClientRect();
  const scaleX = svgRect.width / W;
  const scaleY = svgRect.height / H;
  const pointLeft = (svgRect.left - wrapRect.left) + x * scaleX;
  const pointTop = (svgRect.top - wrapRect.top) + padT * scaleY;

  const tooltipWidth = tooltip.offsetWidth || 150;
  let left = pointLeft + 14;
  if (left + tooltipWidth > wrapRect.width) {
    left = pointLeft - tooltipWidth - 14;
  }
  tooltip.style.left = `${Math.max(4, left)}px`;
  tooltip.style.top = `${Math.max(4, pointTop)}px`;
}

function hideChartTooltip() {
  const guide = document.getElementById('growthChartHoverGuide');
  if (guide) guide.setAttribute('visibility', 'hidden');
  const tooltip = document.getElementById('growthChartTooltip');
  if (tooltip) tooltip.hidden = true;
}

function onLanguageChange() {
  renderGrowthTable();
}

window.onload = () => {
  growthRecords = loadGrowthRecords().sort((a, b) => a.date.localeCompare(b.date));
  document.getElementById('growthDateInput').value = getTodayStr();
  updateDateRangeDefaults();
  renderGrowthTable();
  renderGrowthChart();
};
