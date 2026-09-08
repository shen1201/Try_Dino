// 個人傷害排名獎勵區間資料：[起始名次, 結束名次, 寶箱數量]
const REWARD_TIERS = [
  [1, 1, 30],
  [2, 3, 20],
  [4, 6, 12],
  [7, 10, 9],
  [11, 15, 6],
  [16, 20, 4],
  [21, 30, 3],
  [31, 50, 2],
  [51, 10000, 1]
];

function renderRewardTable() {
  const tbody = document.getElementById('rewardTableBody');
  let rowsHtml = '';
  REWARD_TIERS.forEach(([from, to, amount]) => {
    const rankText = from === to ? t('guide.rankSingle', { n: from }) : t('guide.rankRange', { from, to: to.toLocaleString() });
    rowsHtml += `<tr><td>${rankText}</td><td>${amount}</td></tr>`;
  });
  tbody.innerHTML = rowsHtml;
}

function renderTitanTable() {
  const tbody = document.getElementById('titanTableBody');
  let rowsHtml = '';
  for (let lvl = 1; lvl <= 200; lvl++) {
    rowsHtml += `<tr><td>Lv. ${lvl}</td><td>${getTitanDamage(lvl).toLocaleString()}</td><td>${getTitanHp(lvl).toLocaleString()}</td></tr>`;
  }
  tbody.innerHTML = rowsHtml;
}

// 語言切換時重新渲染表格內容
function onLanguageChange() {
  renderRewardTable();
  renderTitanTable();
}

window.onload = () => {
  renderRewardTable();
  renderTitanTable();
};
