// 星座節點 Lv.1~50 累計攻擊力/血量/建築物傷害對照表
// 資料來源與管理員後台「星座升級攻略」同一份，已交叉驗證數值正確 (index 0 對應 Lv.1)
const CONSTELLATION_LEVEL_STATS = [
  { atk: 1, hp: 10, buildDmg: 1 }, { atk: 2, hp: 20, buildDmg: 2 }, { atk: 3, hp: 30, buildDmg: 3 }, { atk: 4, hp: 40, buildDmg: 4 },
  { atk: 6, hp: 60, buildDmg: 6 }, { atk: 8, hp: 80, buildDmg: 8 }, { atk: 10, hp: 100, buildDmg: 10 }, { atk: 12, hp: 120, buildDmg: 12 },
  { atk: 15, hp: 150, buildDmg: 15 }, { atk: 18, hp: 180, buildDmg: 18 }, { atk: 21, hp: 210, buildDmg: 21 }, { atk: 25, hp: 250, buildDmg: 25 },
  { atk: 32, hp: 320, buildDmg: 32 }, { atk: 40, hp: 400, buildDmg: 40 }, { atk: 48, hp: 480, buildDmg: 48 }, { atk: 56, hp: 560, buildDmg: 56 },
  { atk: 64, hp: 640, buildDmg: 64 }, { atk: 72, hp: 720, buildDmg: 72 }, { atk: 80, hp: 800, buildDmg: 80 }, { atk: 89, hp: 890, buildDmg: 89 },
  { atk: 98, hp: 980, buildDmg: 98 }, { atk: 107, hp: 1070, buildDmg: 107 }, { atk: 116, hp: 1160, buildDmg: 116 }, { atk: 125, hp: 1250, buildDmg: 125 },
  { atk: 135, hp: 1350, buildDmg: 135 }, { atk: 145, hp: 1450, buildDmg: 145 }, { atk: 155, hp: 1550, buildDmg: 155 }, { atk: 165, hp: 1650, buildDmg: 165 },
  { atk: 175, hp: 1750, buildDmg: 175 }, { atk: 186, hp: 1860, buildDmg: 186 }, { atk: 211, hp: 2110, buildDmg: 211 }, { atk: 239, hp: 2390, buildDmg: 239 },
  { atk: 270, hp: 2700, buildDmg: 270 }, { atk: 305, hp: 3050, buildDmg: 305 }, { atk: 343, hp: 3430, buildDmg: 343 }, { atk: 384, hp: 3840, buildDmg: 384 },
  { atk: 428, hp: 4280, buildDmg: 428 }, { atk: 475, hp: 4750, buildDmg: 475 }, { atk: 525, hp: 5250, buildDmg: 525 }, { atk: 580, hp: 5800, buildDmg: 580 },
  { atk: 686, hp: 6860, buildDmg: 686 }, { atk: 799, hp: 7990, buildDmg: 799 }, { atk: 920, hp: 9200, buildDmg: 920 }, { atk: 1048, hp: 10480, buildDmg: 1048 },
  { atk: 1184, hp: 11840, buildDmg: 1184 }, { atk: 1328, hp: 13280, buildDmg: 1328 }, { atk: 1480, hp: 14800, buildDmg: 1480 }, { atk: 1639, hp: 16390, buildDmg: 1639 },
  { atk: 1811, hp: 18110, buildDmg: 1811 }, { atk: 2000, hp: 20000, buildDmg: 2000 }
];

function getConstellationStats(level) {
  return CONSTELLATION_LEVEL_STATS[level - 1] || { atk: 0, hp: 0, buildDmg: 0 };
}
