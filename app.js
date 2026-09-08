// 狀態管理
let currentFilter = null;
let equippedSlots = [null, null, null, null, null];
let slotLevels = [1, 1, 1, 1, 1];
let selectedSlotIndex = null; // 目前點選、等待裝備符文的槽位

let playerStats = {
  attack: 0,
  hp: 0,
  constellationAttack: 0,
  constellationHp: 0,
  constellationBuildingAtk: 0
};

// 造型加成 (預設 0.0)
let skinBonus = {
  atk: 0.0,
  hp: 0.0
};

window.onload = () => {
  initLevelSelects();
  loadFromLocalStorage();
  updateSlotsUI();
  renderRunes();
  calculateFinalStats();
};

function validateNumber(input, key) {
  input.value = input.value.replace(/[^0-9]/g, '');
  playerStats[key] = input.value ? parseInt(input.value, 10) : 0;
  calculateFinalStats();
}

// 更新造型加成 (輸入值為百分比數字，如 5.5 代表 5.5%，上限 30%)
function updateSkinBonus(type, value) {
  let pct = parseFloat(value);
  if (isNaN(pct) || pct < 0) pct = 0;
  if (pct > 30) pct = 30;
  skinBonus[type] = pct / 100;
  calculateFinalStats();
}

function initLevelSelects() {
  for (let i = 0; i < 5; i++) {
    const select = document.getElementById(`level-slot-${i}`);
    select.innerHTML = '';
    for (let lvl = 1; lvl <= 31; lvl++) {
      const opt = document.createElement('option');
      opt.value = lvl;
      opt.textContent = `Lv.${lvl}`;
      select.appendChild(opt);
    }
  }
}

function updateSlotLevel(index, level) {
  slotLevels[index] = parseInt(level, 10);
  calculateFinalStats();
}

function renderRunes() {
  const grid = document.getElementById('runeGrid');
  grid.innerHTML = '';

  const filteredRunes = currentFilter
    ? runesData.filter(r => r.rarity === currentFilter)
    : runesData;

  filteredRunes.forEach(rune => {
    const isEquipped = equippedSlots.some(slot => slot && slot.id === rune.id);

    const runeEl = document.createElement('div');
    runeEl.className = `rune-item rarity-${rune.rarity} ${isEquipped ? 'equipped' : ''}`;
    runeEl.innerText = translateRuneName(rune.name);

    runeEl.onclick = () => {
      if (isEquipped) return;
      if (selectedSlotIndex === null) {
        alert(t('alert.selectSlotFirst'));
        return;
      }
      equipRuneToSlot(rune, selectedSlotIndex);
      selectedSlotIndex = null;
      updateSlotsUI();
    };

    grid.appendChild(runeEl);
  });
}

function toggleFilter(rarity) {
  if (currentFilter === rarity) {
    currentFilter = null;
  } else {
    currentFilter = rarity;
  }

  document.querySelectorAll('.filter-btn').forEach(btn => {
    if (btn.getAttribute('data-type') === currentFilter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderRunes();
}

// 點選要裝備符文的槽位（再次點選同一槽位可取消選取）
function selectSlot(index) {
  selectedSlotIndex = (selectedSlotIndex === index) ? null : index;
  updateSlotsUI();
}

// 將指定符文裝備到指定槽位 (防呆)
function equipRuneToSlot(rune, index) {
  if (rune.name === "壓縮" || rune.name === "猛瑪") {
    const targetConflict = rune.name === "壓縮" ? "猛瑪" : "壓縮";
    const hasConflict = equippedSlots.some((slot, i) => i !== index && slot && slot.name === targetConflict);
    if (hasConflict) {
      alert(t('alert.conflict', { name: translateRuneName(targetConflict) }));
      return;
    }
  }

  equippedSlots[index] = rune;
  updateSlotsUI();
  renderRunes();
  calculateFinalStats();
}

function unequipRune(index) {
  if (equippedSlots[index]) {
    equippedSlots[index] = null;
    if (selectedSlotIndex === index) selectedSlotIndex = null;
    updateSlotsUI();
    renderRunes();
    calculateFinalStats();
  }
}

function updateSlotsUI() {
  const slots = document.querySelectorAll('.slot');

  equippedSlots.forEach((rune, index) => {
    const slotEl = slots[index];
    if (rune) {
      slotEl.classList.add('filled');
      slotEl.innerHTML = `<div class="rune-item rarity-${rune.rarity}" style="width:100%; height:100%; font-size:11px;">${translateRuneName(rune.name)}</div>`;
    } else {
      slotEl.classList.remove('filled');
      slotEl.innerHTML = '';
    }
    slotEl.classList.toggle('selecting', selectedSlotIndex === index);
  });

  document.getElementById('runePickerPanel').hidden = (selectedSlotIndex === null);
}

// 動態拼裝效果文字，取代硬編碼原創文字
function getRuneEffectText(runeName, level) {
  const config = runeStatsConfig[runeName];
  if (!config || !config[level]) return "無資料";
  const data = config[level];
  const pData = getRuneProcData(runeName, level);

  let parts = [];
  if (data.flatAtk) parts.push(t('effect.flatAtk', { val: data.flatAtk }));
  if (data.flatHp) parts.push(t('effect.flatHp', { val: data.flatHp }));
  if (data.atkPct) parts.push(t('effect.atkPct', { sign: data.atkPct > 0 ? '+' : '', val: (data.atkPct * 100).toFixed(1) }));
  if (data.hpPct) parts.push(t('effect.hpPct', { sign: data.hpPct > 0 ? '+' : '', val: (data.hpPct * 100).toFixed(1) }));
  if (data.reduceDmg) parts.push(t('effect.reduceDmg', { val: data.reduceDmg }));

  if (runeName.startsWith("破壞者")) {
    parts.push(t('effect.destroyer', { val: (data.ratio * 100).toFixed(1) }));
  } else if (runeName === "三重衝擊") {
    parts.push(t('effect.tripleStrike', { val: (data.ratio * 100).toFixed(1) }));
  } else if (runeName === "治癒") {
    parts.push(t('effect.heal', { rate: (pData.procRate * 100).toFixed(1), val: data.flatHeal.toLocaleString() }));
  } else if (runeName === "犧牲") {
    parts.push(t('effect.sacrifice', { rate: (pData.procRate * 100).toFixed(1), val: data.flatHeal.toLocaleString() }));
  } else if (runeName === "吸血") {
    parts.push(t('effect.vampiric', { rate: (pData.procRate * 100), val: (data.ratio * 100).toFixed(1) }));
  } else if (runeName === "隕石") {
    parts.push(t('effect.meteor', { rate: (pData.procRate * 100), val: (data.ratio * 100).toFixed(1) }));
  } else if (runeName === "雷擊") {
    parts.push(t('effect.lightning', { rate: (pData.procRate * 100), val: (data.ratio * 100).toFixed(1) }));
  } else if (runeName === "荊棘") {
    parts.push(t('effect.thorns', { rate: (pData.procRate * 100).toFixed(1), range: t(`thorns.range${data.rangeTier}`), val: (data.ratio * 100).toFixed(1) }));
  } else if (runeName === "狂戰士之怒") {
    parts.push(t('effect.berserker', {
      th1: data.hpThreshold1, val1: (data.atkPctHp1 * 100).toFixed(1),
      th2: data.hpThreshold2, val2: (data.atkPctHp2 * 100).toFixed(1)
    }));
  }

  return parts.join(" / ");
}

// 核心計算與已選清單更新
function calculateFinalStats() {
  let runeFlatAtk = 0;
  let runeFlatHp = 0;
  let runeAtkPct = 0;
  let runeHpPct = 0;
  let totalDestroyerPct = 0; // 破壞者 I + II + III 相加%

  const equippedListEl = document.getElementById('equippedList');
  equippedListEl.innerHTML = '';

  let equippedCount = 0;
  let triggerEffects = []; // 儲存需要進行估算的符文資料
  let runeAvgDamageSum = 0; // 記錄符文提供的平均每下傷害 (供 DPS 使用)

  equippedSlots.forEach((rune, index) => {
    if (rune) {
      equippedCount++;
      const lvl = slotLevels[index];
      const runeStatConfig = runeStatsConfig[rune.name];

      if (runeStatConfig && runeStatConfig[lvl]) {
        const data = runeStatConfig[lvl];
        if (data.flatAtk) runeFlatAtk += data.flatAtk;
        if (data.flatHp) runeFlatHp += data.flatHp;
        if (data.atkPct) runeAtkPct += data.atkPct;
        if (data.hpPct) runeHpPct += data.hpPct;

        // 計算破壞者系列總%
        if (rune.name.startsWith("破壞者")) {
          totalDestroyerPct += (data.ratio || 0);
        }

        // 收集需展示發動估算的符文
        if (["破壞者 I", "破壞者 II", "破壞者 III", "三重衝擊", "吸血", "隕石", "雷擊", "荊棘"].includes(rune.name)) {
          const pData = getRuneProcData(rune.name, lvl);
          triggerEffects.push({
            name: rune.name,
            level: lvl,
            ratio: data.ratio || pData.skillRatio,
            procRate: pData.procRate
          });
        } else if (rune.name === "治癒" || rune.name === "犧牲") {
          const pData = getRuneProcData(rune.name, lvl);
          triggerEffects.push({
            name: rune.name,
            level: lvl,
            procRate: pData.procRate,
            flatHeal: data.flatHeal
          });
        } else if (rune.name === "狂戰士之怒") {
          triggerEffects.push({
            name: rune.name,
            level: lvl,
            hpThreshold1: data.hpThreshold1,
            atkPctHp1: data.atkPctHp1,
            hpThreshold2: data.hpThreshold2,
            atkPctHp2: data.atkPctHp2
          });
        }
      }

      // 新增至「已選擇符文狀態」UI
      const itemEl = document.createElement('div');
      itemEl.className = 'equipped-item';
      itemEl.innerHTML = `
        <div class="equipped-item-info">
          <span class="equipped-slot-tag">${index + 1}</span>
          <span><b>${translateRuneName(rune.name)}</b> (Lv.${lvl})</span>
        </div>
        <span class="equipped-effect">${getRuneEffectText(rune.name, lvl)}</span>
        <span class="remove-btn" onclick="unequipRune(${index})">${t('equipped.remove')}</span>
      `;
      equippedListEl.appendChild(itemEl);
    }
  });

  if (equippedCount === 0) {
    equippedListEl.innerHTML = `<div style="color: #666; font-size: 11px; text-align: center; padding: 4px;">${t('equipped.empty')}</div>`;
  }
  document.getElementById('equippedCount').innerText = `(${equippedCount}/5)`;

  // 加上皮蛋/巢造型加成趴數
  const totalAtkPct = runeAtkPct + skinBonus.atk;
  const totalHpPct = runeHpPct + skinBonus.hp;

  // 1. 計算總攻擊力
  const baseAtkSum = playerStats.attack + playerStats.constellationAttack + runeFlatAtk;
  const finalAtk = Math.round(baseAtkSum * (1 + totalAtkPct));

  // 2. 計算總生命值
  const baseHpSum = playerStats.hp + playerStats.constellationHp + runeFlatHp;
  const finalHp = Math.round(baseHpSum * (1 + totalHpPct));

  // 3. 計算最終對建築物傷害 = (最終傷害 + 星座建築傷害) * (1 + 破壞者總相加%)
  const baseBuildingAtkSum = finalAtk + playerStats.constellationBuildingAtk;
  const finalBuildingAtk = Math.round(baseBuildingAtkSum * (1 + totalDestroyerPct));

  // ===== 動態更新「符文實戰發動估算」面板並累加 DPS 傷害 =====
  const triggerRowListEl = document.getElementById('triggerRowList');
  triggerRowListEl.innerHTML = '';

  if (triggerEffects.length === 0) {
    triggerRowListEl.innerHTML = `<div style="color: #666; font-size: 11px; text-align: center; padding: 4px;">${t('trigger.empty')}</div>`;
  } else {
    triggerEffects.forEach(item => {
      const rowEl = document.createElement('div');
      rowEl.className = 'trigger-row';

      let icon = "⚡";
      let label = translateRuneName(item.name);
      let valText = "";
      let avgText = "";

      if (item.name.startsWith("破壞者")) {
        icon = "🏰";
        valText = t('trig.destroyerVal', { val: (item.ratio * 100).toFixed(1), lvl: item.level });
      } else if (item.name === "三重衝擊") {
        icon = "⚔️";
        const extraDamage = Math.round(finalAtk * item.ratio);
        const avgDamage = Math.round(extraDamage / 3);
        runeAvgDamageSum += avgDamage; // 累加至 DPS
        valText = t('trig.singleBonus', { val: extraDamage.toLocaleString(), lvl: item.level });
        avgText = `⚖️ ${t('trig.avgDmg', { val: avgDamage.toLocaleString() })}`;
      } else if (item.name === "吸血") {
        icon = "🩸";
        const vampHeal = Math.round(finalAtk * item.ratio);
        const avgVamp = Math.round(vampHeal * item.procRate);
        valText = t('trig.singleRestore', { val: vampHeal.toLocaleString(), lvl: item.level });
        avgText = `⚖️ ${t('trig.avgRestoreRate', { val: avgVamp.toLocaleString(), rate: (item.procRate * 100) })}`;
      } else if (item.name === "治癒") {
        icon = "💚";
        const healAmount = item.flatHeal;
        const avgHeal = Math.round(healAmount * item.procRate);
        valText = t('trig.singleRestore', { val: healAmount.toLocaleString(), lvl: item.level });
        avgText = `⚖️ ${t('trig.avgHitRate', { val: avgHeal.toLocaleString(), rate: (item.procRate * 100).toFixed(1) })}`;
      } else if (item.name === "犧牲") {
        icon = "💀";
        const sacAmount = item.flatHeal;
        const avgSac = Math.round(sacAmount * item.procRate);
        valText = t('trig.singleRestore', { val: sacAmount.toLocaleString(), lvl: item.level });
        avgText = `⚖️ ${t('trig.avgDeathRate', { val: avgSac.toLocaleString(), rate: (item.procRate * 100).toFixed(1) })}`;
      } else if (item.name === "隕石") {
        icon = "☄️";
        const meteorDmg = Math.round(finalAtk * item.ratio);
        const avgMeteor = Math.round(meteorDmg * item.procRate);
        runeAvgDamageSum += avgMeteor; // 累加至 DPS
        valText = t('trig.singleSkill', { val: meteorDmg.toLocaleString(), lvl: item.level });
        avgText = `⚖️ ${t('trig.avgDmgRate', { val: avgMeteor.toLocaleString(), rate: (item.procRate * 100).toFixed(0) })}`;
      } else if (item.name === "雷擊") {
        icon = "⚡";
        const lightningDmg = Math.round(finalAtk * item.ratio);
        const avgLightning = Math.round(lightningDmg * item.procRate);
        runeAvgDamageSum += avgLightning; // 累加至 DPS
        valText = t('trig.singleSkill', { val: lightningDmg.toLocaleString(), lvl: item.level });
        avgText = `⚖️ ${t('trig.avgDmgRate', { val: avgLightning.toLocaleString(), rate: (item.procRate * 100) })}`;
      } else if (item.name === "荊棘") {
        icon = "🥀";
        const thornDmg = Math.round(finalAtk * item.ratio);
        const avgThorn = Math.round(thornDmg * item.procRate);
        runeAvgDamageSum += avgThorn; // 累加至 DPS
        valText = t('trig.singleSkill', { val: thornDmg.toLocaleString(), lvl: item.level });
        avgText = `⚖️ ${t('trig.avgDmgRate', { val: avgThorn.toLocaleString(), rate: (item.procRate * 100).toFixed(1) })}`;
      } else if (item.name === "狂戰士之怒") {
        icon = "😡";
        valText = t('trig.berserkerVal', { th1: item.hpThreshold1, val1: (item.atkPctHp1 * 100).toFixed(1), lvl: item.level });
        avgText = `⚖️ ${t('trig.berserkerAvg', { th2: item.hpThreshold2, val2: (item.atkPctHp2 * 100).toFixed(1) })}`;
      }

      rowEl.innerHTML = `
        <span>${icon} ${label}：</span>
        <div class="trigger-val-container">
          <span class="trigger-val">${valText}</span>
          ${avgText ? `<span class="trigger-avg">${avgText}</span>` : ''}
        </div>
      `;
      triggerRowListEl.appendChild(rowEl);
    });
  }

  // 4. 計算最終 DPS = 最終總攻擊力 + 符文平均每下傷害總和
  const finalDps = finalAtk + runeAvgDamageSum;

  // 更新結果 UI
  document.getElementById('finalAttackVal').innerText = finalAtk.toLocaleString();
  document.getElementById('finalHpVal').innerText = finalHp.toLocaleString();
  document.getElementById('finalDpsVal').innerText = finalDps.toLocaleString();
  document.getElementById('finalBuildingAtkVal').innerText = finalBuildingAtk.toLocaleString();

  // 更新計算過程 UI
  document.getElementById('atkFormulaDetails').innerHTML =
    `<span class="highlight-atk">${t('calc.atkLabel')}</span> (${playerStats.attack} + ${playerStats.constellationAttack} + ${runeFlatAtk}) × (1 + ${(totalAtkPct * 100).toFixed(1)}%) = <b>${finalAtk.toLocaleString()}</b>`;

  document.getElementById('hpFormulaDetails').innerHTML =
    `<span class="highlight-hp">${t('calc.hpLabel')}</span> (${playerStats.hp} + ${playerStats.constellationHp} + ${runeFlatHp}) × (1 + ${(totalHpPct * 100).toFixed(1)}%) = <b>${finalHp.toLocaleString()}</b>`;

  document.getElementById('dpsFormulaDetails').innerHTML =
    `<span class="highlight-dps">${t('calc.dpsLabel')}</span> ${finalAtk.toLocaleString()} + ${runeAvgDamageSum.toLocaleString()} (${t('calc.dpsRuneAvg')}) = <b>${finalDps.toLocaleString()}</b>`;

  document.getElementById('buildingAtkFormulaDetails').innerHTML =
    `<span class="highlight-building">${t('calc.buildingLabel')}</span> (${finalAtk.toLocaleString()} + ${playerStats.constellationBuildingAtk}) × (1 + ${(totalDestroyerPct * 100).toFixed(1)}%) = <b>${finalBuildingAtk.toLocaleString()}</b>`;

  saveToLocalStorage();
}

// ===== LocalStorage 自動儲存與還原 =====
const LOCAL_STORAGE_KEY = 'dinoMutantRuneConfig';

function saveToLocalStorage() {
  try {
    const data = {
      stats: playerStats,
      skins: skinBonus,
      equipped: equippedSlots.map((r, i) => r ? { id: r.id, name: r.name, level: slotLevels[i] } : null)
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error("儲存至 LocalStorage 失敗", err);
  }
}

function loadFromLocalStorage() {
  let raw;
  try {
    raw = localStorage.getItem(LOCAL_STORAGE_KEY);
  } catch (err) {
    console.error("讀取 LocalStorage 失敗", err);
    return;
  }
  if (!raw) return;

  try {
    const data = JSON.parse(raw);

    // 1. 復原數值輸入框
    if (data.stats) {
      playerStats = Object.assign(playerStats, data.stats);
      document.getElementById('attackInput').value = playerStats.attack || '';
      document.getElementById('hpInput').value = playerStats.hp || '';
      document.getElementById('astroAttackInput').value = playerStats.constellationAttack || '';
      document.getElementById('astroHpInput').value = playerStats.constellationHp || '';
      document.getElementById('astroBuildingAtkInput').value = playerStats.constellationBuildingAtk || '';
    }

    // 2. 復原造型加成
    if (data.skins) {
      skinBonus.atk = parseFloat(data.skins.atk) || 0;
      skinBonus.hp = parseFloat(data.skins.hp) || 0;
      document.getElementById('eggSkinInput').value = (skinBonus.atk * 100).toFixed(1);
      document.getElementById('nestSkinInput').value = (skinBonus.hp * 100).toFixed(1);
    }

    // 3. 復原符文槽位
    if (data.equipped && Array.isArray(data.equipped)) {
      equippedSlots = [null, null, null, null, null];
      slotLevels = [1, 1, 1, 1, 1];

      data.equipped.forEach((item, index) => {
        if (item && index < 5) {
          const targetRune = runesData.find(r => r.id === item.id || r.name === item.name);
          if (targetRune) {
            equippedSlots[index] = targetRune;
            slotLevels[index] = item.level || 1;
            document.getElementById(`level-slot-${index}`).value = slotLevels[index];
          }
        }
      });
    }
  } catch (err) {
    console.error("解析已儲存的配置失敗", err);
  }
}

function clearSavedConfig() {
  if (!confirm(t('alert.confirmClear'))) return;

  try {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  } catch (err) {
    console.error("清除 LocalStorage 失敗", err);
  }

  playerStats = {
    attack: 0,
    hp: 0,
    constellationAttack: 0,
    constellationHp: 0,
    constellationBuildingAtk: 0
  };
  skinBonus = { atk: 0.0, hp: 0.0 };
  equippedSlots = [null, null, null, null, null];
  slotLevels = [1, 1, 1, 1, 1];
  selectedSlotIndex = null;

  ['attackInput', 'hpInput', 'astroAttackInput', 'astroHpInput', 'astroBuildingAtkInput', 'eggSkinInput', 'nestSkinInput'].forEach(id => {
    document.getElementById(id).value = '';
  });
  for (let i = 0; i < 5; i++) {
    document.getElementById(`level-slot-${i}`).value = 1;
  }

  updateSlotsUI();
  renderRunes();
  calculateFinalStats();
}

// 語言切換時重新渲染所有動態產生的文字內容
function onLanguageChange() {
  updateSlotsUI();
  renderRunes();
  calculateFinalStats();
}
