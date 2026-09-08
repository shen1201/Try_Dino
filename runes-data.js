// 符文清單 (已依照品質由低到高排序：普通 -> 稀有 -> 史詩 -> 獨特 -> 傳說)
const runesData = [
  // ===== 普通 =====
  { id: 1, name: "治癒", rarity: "普通" },
  { id: 12, name: "犧牲", rarity: "普通" },
  { id: 13, name: "三重衝擊", rarity: "普通" },
  { id: 14, name: "破壞者 I", rarity: "普通" },

  // ===== 稀有 =====
  { id: 2, name: "堅硬2", rarity: "稀有" },
  { id: 15, name: "破壞者 II", rarity: "稀有" },

  // ===== 史詩 =====
  { id: 3, name: "壓縮", rarity: "史詩" },
  { id: 4, name: "猛瑪", rarity: "史詩" },
  { id: 5, name: "攻擊力3", rarity: "史詩" },
  { id: 6, name: "體力3", rarity: "史詩" },
  { id: 16, name: "破壞者 III", rarity: "史詩" },

  // ===== 獨特 =====
  { id: 7, name: "吸血", rarity: "獨特" },
  { id: 8, name: "強打", rarity: "獨特" },
  { id: 9, name: "屏障", rarity: "獨特" },
  { id: 17, name: "狂戰士之怒", rarity: "獨特" },

  // ===== 傳說 =====
  { id: 10, name: "隕石", rarity: "傳說" },
  { id: 11, name: "雷擊", rarity: "傳說" },
  { id: 18, name: "荊棘", rarity: "傳說" }
];

// 輔助函式：取得各等級機率與技能趴數
function getRuneProcData(runeName, level) {
  if (runeName === "治癒") {
    if (level <= 10) return { procRate: 0.05 };
    if (level <= 20) return { procRate: 0.08 };
    if (level <= 30) return { procRate: 0.10 };
    return { procRate: 0.13 };
  }
  if (runeName === "犧牲") {
    if (level <= 10) return { procRate: 0.35 };
    if (level <= 20) return { procRate: 0.40 };
    if (level <= 30) return { procRate: 0.45 };
    return { procRate: 0.50 };
  }
  if (runeName === "吸血") {
    if (level <= 10) return { procRate: 0.15, skillRatio: 0.30 + (level - 1) * 0.02 + (level >= 6 ? 0.05 : 0) };
    if (level <= 20) return { procRate: 0.20, skillRatio: 0.55 + (level - 11) * 0.02 + (level >= 16 ? 0.05 : 0) };
    if (level <= 30) return { procRate: 0.25, skillRatio: 0.80 + (level - 21) * 0.02 + (level >= 26 ? 0.05 : 0) };
    return { procRate: 0.30, skillRatio: 1.10 };
  }
  if (runeName === "隕石") {
    if (level <= 5) return { procRate: 0.50, skillRatio: 0.15 + (level - 1) * 0.01 };
    if (level <= 10) return { procRate: 0.55, skillRatio: 0.20 + (level - 6) * 0.01 };
    if (level <= 15) return { procRate: 0.55, skillRatio: 0.40 + (level - 11) * 0.01 };
    if (level <= 20) return { procRate: 0.55, skillRatio: 0.50 + (level - 16) * 0.01 };
    if (level <= 25) return { procRate: 0.60, skillRatio: 0.65 + (level - 21) * 0.01 };
    if (level <= 30) return { procRate: 0.65, skillRatio: 0.70 + (level - 26) * 0.01 };
    return { procRate: 0.65, skillRatio: 0.80 };
  }
  if (runeName === "雷擊") {
    if (level <= 5) return { procRate: 0.40, skillRatio: 0.60 + (level - 1) * 0.01 };
    if (level <= 10) return { procRate: 0.45, skillRatio: 0.75 + (level - 6) * 0.01 };
    if (level <= 15) return { procRate: 0.50, skillRatio: 1.00 + (level - 11) * 0.01 };
    if (level <= 20) return { procRate: 0.50, skillRatio: 1.24 + (level - 16) * 0.01 };
    if (level <= 25) return { procRate: 0.60, skillRatio: 1.35 + (level - 21) * 0.01 };
    if (level <= 30) return { procRate: 0.65, skillRatio: 1.50 + (level - 26) * 0.01 };
    return { procRate: 0.65, skillRatio: 1.70 };
  }
  if (runeName === "荊棘") {
    const ratios = [
      0.055, 0.060, 0.065, 0.070, 0.075,
      0.085, 0.090, 0.100, 0.110, 0.120,
      0.130, 0.140, 0.150, 0.160, 0.170,
      0.170, 0.180, 0.190, 0.200, 0.210,
      0.220, 0.230, 0.240, 0.250, 0.260,
      0.260, 0.270, 0.280, 0.290, 0.300, 0.320
    ];
    const procRate = level <= 5 ? 0.70 : level <= 10 ? 0.75 : level <= 15 ? 0.80 :
      level <= 20 ? 0.85 : level <= 25 ? 0.90 : level <= 30 ? 0.95 : 1.00;
    return { procRate, skillRatio: ratios[level - 1] };
  }
  return { procRate: 1.0, skillRatio: 0.0 };
}

// 輔助建構 1~31 等級物件
function generateRuneLevelData(callback) {
  const result = {};
  for (let lvl = 1; lvl <= 31; lvl++) {
    result[lvl] = callback(lvl);
  }
  return result;
}

// 全符文等級數值設定 (僅儲存純數據事實，避開著作權文案風險)
const runeStatsConfig = {
  "治癒": generateRuneLevelData((lvl) => {
    const flatHeals = [
      50, 90, 130, 170, 210, 250, 290, 330, 370, 410,
      430, 450, 470, 490, 510, 530, 550, 570, 590, 610,
      630, 650, 670, 690, 710, 730, 750, 770, 790, 810, 830
    ];
    return { flatHeal: flatHeals[lvl - 1] };
  }),
  "犧牲": generateRuneLevelData((lvl) => {
    const flatHeals = [
      10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
      110, 120, 130, 140, 150, 160, 170, 180, 190, 200,
      210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 350
    ];
    return { flatHeal: flatHeals[lvl - 1] };
  }),
  "三重衝擊": generateRuneLevelData((lvl) => {
    const ratios = [
      0.02, 0.025, 0.03, 0.035, 0.04,
      0.06, 0.065, 0.07, 0.075, 0.08,
      0.10, 0.105, 0.11, 0.115, 0.12,
      0.14, 0.145, 0.15, 0.155, 0.16,
      0.18, 0.185, 0.19, 0.195, 0.20,
      0.22, 0.225, 0.23, 0.235, 0.24, 0.27
    ];
    return { ratio: ratios[lvl - 1] };
  }),
  "破壞者 I": generateRuneLevelData((lvl) => {
    const ratios = [
      0.051, 0.054, 0.057, 0.060, 0.063,
      0.075, 0.078, 0.081, 0.084, 0.087,
      0.099, 0.102, 0.105, 0.108, 0.111,
      0.132, 0.135, 0.138, 0.141, 0.144,
      0.171, 0.177, 0.183, 0.189, 0.195,
      0.231, 0.237, 0.243, 0.249, 0.255, 0.300
    ];
    return { ratio: ratios[lvl - 1] };
  }),
  "破壞者 II": generateRuneLevelData((lvl) => {
    const ratios = [
      0.119, 0.126, 0.133, 0.140, 0.147,
      0.175, 0.182, 0.189, 0.196, 0.203,
      0.231, 0.238, 0.245, 0.252, 0.259,
      0.308, 0.315, 0.322, 0.329, 0.336,
      0.399, 0.413, 0.427, 0.441, 0.455,
      0.539, 0.553, 0.567, 0.581, 0.595, 0.700
    ];
    return { ratio: ratios[lvl - 1] };
  }),
  "破壞者 III": generateRuneLevelData((lvl) => {
    const ratios = [
      0.280, 0.288, 0.296, 0.304, 0.312,
      0.400, 0.408, 0.416, 0.424, 0.432,
      0.520, 0.536, 0.552, 0.568, 0.584,
      0.680, 0.700, 0.720, 0.740, 0.760,
      0.920, 0.940, 0.960, 0.980, 1.000,
      1.240, 1.260, 1.280, 1.300, 1.320, 1.600
    ];
    return { ratio: ratios[lvl - 1] };
  }),
  "堅硬2": generateRuneLevelData((lvl) => {
    return { reduceDmg: 30 + (lvl - 1) * 2 };
  }),
  "體力3": generateRuneLevelData((lvl) => {
    const flatHps = [
      875, 900, 925, 950, 975, 1000, 1025, 1050, 1075, 1100,
      1125, 1150, 1175, 1200, 1225, 1250, 1275, 1300, 1325, 1350,
      1375, 1400, 1425, 1450, 1475, 1500, 1550, 1600, 1650, 1700, 1875
    ];
    return { flatHp: flatHps[lvl - 1] };
  }),
  "攻擊力3": generateRuneLevelData((lvl) => {
    const flatAtks = [
      35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
      45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
      55, 56, 57, 58, 59, 60, 62, 64, 66, 68, 75
    ];
    return { flatAtk: flatAtks[lvl - 1] };
  }),
  "猛瑪": generateRuneLevelData((lvl) => {
    const hpPcts = [
      0.195, 0.200, 0.205, 0.210, 0.215,
      0.270, 0.275, 0.280, 0.285, 0.290,
      0.345, 0.355, 0.365, 0.375, 0.385,
      0.445, 0.458, 0.470, 0.483, 0.495,
      0.595, 0.608, 0.620, 0.633, 0.645,
      0.795, 0.808, 0.820, 0.833, 0.845, 1.020
    ];
    return { hpPct: hpPcts[lvl - 1], atkPct: -0.25 };
  }),
  "壓縮": generateRuneLevelData((lvl) => {
    const atkPcts = [
      0.150, 0.152, 0.154, 0.156, 0.158,
      0.170, 0.175, 0.180, 0.185, 0.190,
      0.220, 0.225, 0.230, 0.235, 0.240,
      0.270, 0.275, 0.280, 0.285, 0.290,
      0.330, 0.335, 0.340, 0.345, 0.350,
      0.390, 0.395, 0.400, 0.405, 0.410, 0.450
    ];
    return { atkPct: atkPcts[lvl - 1], hpPct: -0.25 };
  }),
  "吸血": generateRuneLevelData((lvl) => ({ ratio: getRuneProcData("吸血", lvl).skillRatio })),
  "強打": generateRuneLevelData((lvl) => {
    const atkPcts = [
      0.100, 0.105, 0.110, 0.115, 0.120,
      0.140, 0.145, 0.150, 0.155, 0.160,
      0.180, 0.185, 0.190, 0.195, 0.200,
      0.220, 0.225, 0.230, 0.235, 0.240,
      0.280, 0.290, 0.300, 0.310, 0.320,
      0.380, 0.390, 0.400, 0.410, 0.420, 0.500
    ];
    return { atkPct: atkPcts[lvl - 1] };
  }),
  "屏障": generateRuneLevelData((lvl) => {
    const hpPcts = [
      0.175, 0.180, 0.185, 0.190, 0.195,
      0.250, 0.255, 0.260, 0.265, 0.270,
      0.325, 0.335, 0.345, 0.355, 0.365,
      0.425, 0.438, 0.450, 0.463, 0.475,
      0.575, 0.588, 0.600, 0.613, 0.625,
      0.775, 0.788, 0.800, 0.813, 0.825, 1.000
    ];
    return { hpPct: hpPcts[lvl - 1] };
  }),
  "狂戰士之怒": generateRuneLevelData((lvl) => {
    const tiers = [
      { atk1: 0.110, atk2: 0.085, hp2: 30 },
      { atk1: 0.120, atk2: 0.090, hp2: 30 },
      { atk1: 0.120, atk2: 0.095, hp2: 30 },
      { atk1: 0.130, atk2: 0.095, hp2: 30 },
      { atk1: 0.130, atk2: 0.105, hp2: 30 },
      { atk1: 0.150, atk2: 0.120, hp2: 30 },
      { atk1: 0.160, atk2: 0.125, hp2: 30 },
      { atk1: 0.170, atk2: 0.125, hp2: 30 },
      { atk1: 0.170, atk2: 0.135, hp2: 30 },
      { atk1: 0.180, atk2: 0.135, hp2: 30 },
      { atk1: 0.200, atk2: 0.150, hp2: 30 },
      { atk1: 0.200, atk2: 0.160, hp2: 30 },
      { atk1: 0.210, atk2: 0.160, hp2: 30 },
      { atk1: 0.220, atk2: 0.165, hp2: 30 },
      { atk1: 0.220, atk2: 0.170, hp2: 30 },
      { atk1: 0.240, atk2: 0.190, hp2: 30 },
      { atk1: 0.250, atk2: 0.190, hp2: 30 },
      { atk1: 0.250, atk2: 0.195, hp2: 30 },
      { atk1: 0.260, atk2: 0.200, hp2: 30 },
      { atk1: 0.260, atk2: 0.205, hp2: 30 },
      { atk1: 0.310, atk2: 0.210, hp2: 40 },
      { atk1: 0.320, atk2: 0.220, hp2: 40 },
      { atk1: 0.330, atk2: 0.225, hp2: 40 },
      { atk1: 0.340, atk2: 0.235, hp2: 40 },
      { atk1: 0.350, atk2: 0.240, hp2: 40 },
      { atk1: 0.420, atk2: 0.285, hp2: 40 },
      { atk1: 0.430, atk2: 0.295, hp2: 40 },
      { atk1: 0.440, atk2: 0.300, hp2: 40 },
      { atk1: 0.450, atk2: 0.310, hp2: 40 },
      { atk1: 0.460, atk2: 0.315, hp2: 40 },
      { atk1: 0.550, atk2: 0.375, hp2: 40 }
    ];
    const t = tiers[lvl - 1];
    return { hpThreshold1: 60, atkPctHp1: t.atk1, hpThreshold2: t.hp2, atkPctHp2: t.atk2 };
  }),
  "隕石": generateRuneLevelData((lvl) => ({ ratio: getRuneProcData("隕石", lvl).skillRatio, atkPct: lvl >= 11 ? (lvl >= 31 ? 0.10 : (lvl >= 21 ? 0.07 : 0.04)) : 0.02, hpPct: lvl >= 11 ? (lvl >= 31 ? 0.10 : (lvl >= 21 ? 0.07 : 0.04)) : 0.02 })),
  "雷擊": generateRuneLevelData((lvl) => ({ ratio: getRuneProcData("雷擊", lvl).skillRatio, atkPct: lvl >= 11 ? (lvl >= 31 ? 0.10 : (lvl >= 21 ? 0.07 : 0.04)) : 0.02, hpPct: lvl >= 11 ? (lvl >= 31 ? 0.10 : (lvl >= 21 ? 0.07 : 0.04)) : 0.02 })),
  "荊棘": generateRuneLevelData((lvl) => {
    const passive = lvl >= 31 ? 0.10 : (lvl >= 21 ? 0.07 : (lvl >= 11 ? 0.04 : 0.02));
    const rangeTier = lvl >= 26 ? 3 : (lvl >= 21 ? 2 : 1);
    return { ratio: getRuneProcData("荊棘", lvl).skillRatio, atkPct: passive, hpPct: passive, rangeTier };
  })
};
