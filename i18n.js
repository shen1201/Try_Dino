// ===== 多國語言系統 (zh / en / es / fr / ja) =====
// 注意：翻譯內容為本工具自行整理翻譯，非遊戲官方文案。

const translations = {
  zh: {
    "meta.titleCalculator": "《Dino Mutant》符文配置與數值計算器(非官方)",
    "meta.titleGuide": "《Dino Mutant》攻略(非官方)",
    "meta.titleGrowth": "《Dino Mutant》成長紀錄(非官方)",
    "header.calculator": "《Dino Mutant》符文配置與數值計算器(非官方)",
    "header.guide": "《Dino Mutant》攻略(非官方)",
    "header.growth": "《Dino Mutant》成長紀錄(非官方)",
    "nav.calculator": "🧮 符文計算器",
    "nav.guide": "📖 攻略",
    "nav.growth": "📈 成長紀錄",

    "autosave.hint": "💾 設計已自動儲存在此瀏覽器",
    "btn.clearSaved": "🗑️ 清除已儲存的配置",
    "hint.slotSelect": "點擊上方要裝備的槽位（會反白），即可在下方選擇符文裝備／替換；拆卸請至下方「已選擇符文狀態」按卸下",

    "label.baseAtk": "基礎攻擊力",
    "label.baseHp": "基礎血量",
    "label.baseSpeed": "基礎速度",
    "label.astroAtkLevel": "星座攻擊等級",
    "label.astroHpLevel": "星座血量等級",
    "label.astroBuildLevel": "星座建傷等級",
    "astro.notSelected": "未選擇",
    "label.skinSectionTitle": "造型加成設定",
    "label.eggSkin": "皮蛋造型 (加成%攻擊，上限 30%)",
    "label.nestSkin": "巢造型 (加成%血量，上限 30%)",

    "result.finalAtk": "最終總攻擊力",
    "result.finalHp": "最終總生命值",
    "result.finalSpeed": "最終速度",
    "result.finalDps": "最終 DPS",
    "result.finalBuildingAtk": "對建築物傷害",
    "result.dinoLevel": "恐龍等級",

    "trigger.title": "符文實戰發動估算 (單次發動 / 平均期望)",
    "trigger.empty": "尚未裝備任何具實戰估算之符文",

    "equipped.title": "已選擇符文狀態",
    "equipped.empty": "尚未裝備任何符文",
    "equipped.remove": "卸下",

    "sets.title": "符文套組",
    "sets.defaultName": "套組 {n}",
    "sets.renamePrompt": "為此套組命名：",
    "sets.renameTooltip": "重新命名套組",
    "sets.addTooltip": "新增套組 (最多 12 套)",
    "sets.deleteTooltip": "刪除套組",
    "sets.confirmDelete": "確定要刪除「{name}」這個套組嗎？此動作無法復原。",

    "statSets.title": "恐龍數值套組",
    "statSets.defaultName": "第 {n} 套數值",
    "statSets.renamePrompt": "為此數值套組命名：",
    "statSets.renameTooltip": "重新命名數值套組",
    "statSets.addTooltip": "新增數值套組 (最多 5 套)",
    "statSets.deleteTooltip": "刪除數值套組",
    "statSets.confirmDelete": "確定要刪除「{name}」這個數值套組嗎？此動作無法復原。",

    "calc.title": "詳細計算過程：",
    "calc.atkLabel": "[攻擊]",
    "calc.hpLabel": "[生命]",
    "calc.dpsLabel": "[DPS]",
    "calc.buildingLabel": "[建築傷害]",
    "calc.dinoLevelLabel": "[恐龍等級]",
    "calc.dpsRuneAvg": "符文平均每下傷害",

    "disclaimer.title": "⚠️ 免責聲明與使用須知：",
    "disclaimer.calc.line1": "1. 本工具為《Dino Mutant》玩家個人/社群獨立開發測試之輔助工具，**純屬交流分享且絕無營利行為**，祝大家遊戲愉快！🎮",
    "disclaimer.calc.line2": "2. 所有計算結果（包含總數值、DPS、實戰發動單次與平均期望值）皆為模擬試算，僅供參考。",
    "disclaimer.calc.line3": "3. 實際遊戲內傷害、恢復量與發動機率可能因遊戲版本更新、伺服器機制、敵人防禦、戰場環境或特定技能機制等因素而有所差異，請以遊戲內實際顯示數據為準。",
    "disclaimer.calc.line4": "4. 本工具與《Dino Mutant》遊戲官方無關，請勿用於任何商業用途。",
    "disclaimer.guide.line1": "1. 本頁面為《Dino Mutant》玩家個人/社群獨立整理之攻略內容，**純屬交流分享且絕無營利行為**，祝大家遊戲愉快！🎮",
    "disclaimer.guide.line2": "2. 內容可能因遊戲版本更新而有所差異，請以遊戲內實際狀況為準。",
    "disclaimer.guide.line3": "3. 本頁面與《Dino Mutant》遊戲官方無關，請勿用於任何商業用途。",
    "disclaimer.growth.line1": "1. 本頁面為《Dino Mutant》玩家個人/社群獨立開發之輔助工具，**純屬交流分享且絕無營利行為**，祝大家遊戲愉快！🎮",
    "disclaimer.growth.line2": "2. 所有紀錄僅儲存在你目前使用的瀏覽器裡，換瀏覽器、換裝置或清除瀏覽器資料都會遺失，請自行留意備份。",
    "disclaimer.growth.line3": "3. 本頁面與《Dino Mutant》遊戲官方無關，請勿用於任何商業用途。",

    "growth.formTitle": "新增／編輯每日紀錄",
    "growth.dateLabel": "日期",
    "growth.atkLabel": "最高攻擊",
    "growth.hpLabel": "最高血量",
    "growth.speedLabel": "最高速度",
    "growth.addBtn": "新增紀錄",
    "growth.updateBtn": "更新紀錄",
    "growth.cancelEditBtn": "取消編輯",
    "growth.alertNoDate": "請選擇日期",
    "growth.confirmOverwrite": "{date} 已經有紀錄了，確定要覆蓋嗎？",
    "growth.confirmDelete": "確定要刪除 {date} 這筆紀錄嗎？此動作無法復原。",
    "growth.chartTitle": "成長趨勢圖",
    "growth.rangeStart": "開始日期",
    "growth.rangeEnd": "結束日期",
    "growth.resetRange": "重設為預設範圍",
    "growth.chartEmpty": "此區間內沒有資料",
    "growth.legendAtk": "攻擊",
    "growth.legendHp10": "血量／10",
    "growth.legendSpeed": "速度",
    "growth.legendLevel": "恐龍等級",
    "growth.tableTitle": "每日紀錄",
    "growth.colDate": "日期",
    "growth.colAtk": "攻擊",
    "growth.colHp": "血量",
    "growth.colSpeed": "速度",
    "growth.colLevel": "恐龍等級",
    "growth.colCreated": "填寫時間",
    "growth.colUpdated": "修正時間",
    "growth.colActions": "操作",
    "growth.edit": "編輯",
    "growth.delete": "刪除",
    "growth.empty": "尚無任何紀錄",
    "growth.opLogBtn": "查看操作紀錄",
    "growth.opLogBtnHide": "關閉操作紀錄",
    "growth.opLogTitle": "操作歷史紀錄",
    "growth.opLogColTime": "操作時間",
    "growth.opLogColAction": "操作類型",
    "growth.opLogActionAdd": "新增",
    "growth.opLogActionUpdate": "修改",
    "growth.opLogActionDelete": "刪除",
    "growth.opLogEmpty": "尚無操作紀錄",
    "growth.opLogConfirmDelete": "確定要刪除這筆操作紀錄嗎？此動作無法復原。",

    "alert.selectSlotFirst": "請先點選要裝備的符文槽位，再選擇符文",
    "alert.conflict": "「壓縮」與「猛瑪」不能同時裝備！請先卸下「{name}」。",
    "alert.confirmClear": "確定要清除已儲存的符文配置嗎？此動作無法復原。",

    "runeNames": {
      "治癒": "治癒", "犧牲": "犧牲", "三重衝擊": "三重衝擊",
      "破壞者 I": "破壞者 I", "破壞者 II": "破壞者 II", "破壞者 III": "破壞者 III",
      "堅硬2": "堅硬2", "體力3": "體力3", "攻擊力3": "攻擊力3",
      "猛瑪": "猛瑪", "壓縮": "壓縮", "吸血": "吸血", "強打": "強打",
      "屏障": "屏障", "狂戰士之怒": "狂戰士之怒", "隕石": "隕石", "雷擊": "雷擊", "荊棘": "荊棘"
    },
    "rarity": {
      "普通": "普通", "稀有": "稀有", "史詩": "史詩", "獨特": "獨特", "傳說": "傳說"
    },

    "effect.flatAtk": "攻擊 +{val}",
    "effect.flatHp": "生命 +{val}",
    "effect.atkPct": "攻擊 {sign}{val}%",
    "effect.hpPct": "生命 {sign}{val}%",
    "effect.reduceDmg": "減傷 +{val}",
    "effect.destroyer": "對建築傷害 +{val}%",
    "effect.tripleStrike": "每3次攻擊額外加成 {val}%",
    "effect.heal": "受擊時 {rate}% 機率恢復 {val} 生命值",
    "effect.sacrifice": "陣亡時 {rate}% 機率為同格同部落所有單位恢復 {val} 生命值",
    "effect.vampiric": "攻擊時 {rate}% 機率恢復攻擊力 {val}% 之生命",
    "effect.meteor": "{rate}% 機率造成 {val}% 技能傷害",
    "effect.lightning": "{rate}% 機率對單體造成 {val}% 技能傷害",
    "effect.thorns": "{rate}% 機率對 {range} 造成 {val}% 技能傷害",
    "effect.berserker": "生命值低於{th1}%時攻擊力 +{val1}%，低於{th2}%時額外再 +{val2}%",

    "thorns.range1": "當前格 + 直線 1 方向延伸 2 格 (共 3 格)",
    "thorns.range2": "當前格 + 直線 1 方向延伸 3 格 (共 4 格)",
    "thorns.range3": "當前格 + 直線 2 方向各延伸 3 格 (共 7 格)",

    "trig.destroyerVal": "建築傷害加成 +{val}% (Lv.{lvl})",
    "trig.singleBonus": "單次加成 {val} (Lv.{lvl})",
    "trig.avgDmg": "平均每下：+{val} 傷害",
    "trig.singleRestore": "單次恢復 {val} (Lv.{lvl})",
    "trig.avgRestoreRate": "平均每下：+{val} 生命 ({rate}%)",
    "trig.avgHitRate": "平均被擊：+{val} 生命 ({rate}%)",
    "trig.avgDeathRate": "平均陣亡：+{val} 生命 ({rate}%)",
    "trig.singleSkill": "單次技能 {val} (Lv.{lvl})",
    "trig.avgDmgRate": "平均每下：+{val} 傷害 ({rate}%)",
    "trig.berserkerVal": "生命 <{th1}%：+{val1}% 攻擊 (Lv.{lvl})",
    "trig.berserkerAvg": "生命 <{th2}%：再額外 +{val2}% 攻擊",

    "guide.mechTitle": "🦖 泰坦（首領）機制核心說明",
    "guide.mech1": "<b>升降級機制：</b>擊敗當前首領後，下次召喚等級提升 1 級；若未在下次重生前擊敗，首領消失且下次召喚等級降低 1 級。",
    "guide.mech2": "<b>獎勵領取限制：</b>首領狩獵獎勵每日限領 1 次（即使當天已無法獲取獎勵，仍可進場協助輸出）。",
    "guide.mech3": "<b>額外掉落加成：</b>結算時有概率額外獲得 1 個寶箱，機率為「首領等級 × 10%」（首領達到 Lv.10 以上時機率即達 100%）。",
    "guide.rewardTitle": "個人傷害排名獎勵區間",
    "guide.rewardColRank": "傷害名次區間",
    "guide.rewardColAmount": "基礎獎勵數量（寶箱）",
    "guide.rankSingle": "第 {n} 名",
    "guide.rankRange": "第 {from} ～ {to} 名",
    "guide.titanTitle": "泰坦 Lv.1 ～ 200 傷害與生命值",
    "guide.colLevel": "等級",
    "guide.colDamage": "泰坦傷害",
    "guide.colHp": "泰坦生命值"
  },

  en: {
    "meta.titleCalculator": "Dino Mutant Rune Build & Stat Calculator (Unofficial)",
    "meta.titleGuide": "Dino Mutant Guide (Unofficial)",
    "meta.titleGrowth": "Dino Mutant Growth Log (Unofficial)",
    "header.calculator": "Dino Mutant Rune Build & Stat Calculator (Unofficial)",
    "header.guide": "Dino Mutant Guide (Unofficial)",
    "header.growth": "Dino Mutant Growth Log (Unofficial)",
    "nav.calculator": "🧮 Calculator",
    "nav.guide": "📖 Guide",
    "nav.growth": "📈 Growth Log",

    "autosave.hint": "💾 Your build is auto-saved in this browser",
    "btn.clearSaved": "🗑️ Clear saved build",
    "hint.slotSelect": "Click a slot above (it will highlight) to equip/replace a rune from the list below; to unequip, use the button in \"Equipped Runes\" below",

    "label.baseAtk": "Base Attack",
    "label.baseHp": "Base HP",
    "label.baseSpeed": "Base Speed",
    "label.astroAtkLevel": "Constellation Attack Level",
    "label.astroHpLevel": "Constellation HP Level",
    "label.astroBuildLevel": "Constellation Building Dmg Level",
    "astro.notSelected": "Not selected",
    "label.skinSectionTitle": "Skin Bonus Settings",
    "label.eggSkin": "Egg Skin (Attack % bonus, cap 30%)",
    "label.nestSkin": "Nest Skin (HP % bonus, cap 30%)",

    "result.finalAtk": "Final Attack",
    "result.finalHp": "Final HP",
    "result.finalSpeed": "Final Speed",
    "result.finalDps": "Final DPS",
    "result.finalBuildingAtk": "Building Damage",
    "result.dinoLevel": "Dino Level",

    "trigger.title": "Rune Proc Estimate (Single / Average)",
    "trigger.empty": "No equipped runes with combat estimates",

    "equipped.title": "Equipped Runes",
    "equipped.empty": "No runes equipped",
    "equipped.remove": "Remove",

    "sets.title": "Rune Sets",
    "sets.defaultName": "Set {n}",
    "sets.renamePrompt": "Name this set:",
    "sets.renameTooltip": "Rename set",
    "sets.addTooltip": "Add set (up to 12)",
    "sets.deleteTooltip": "Delete set",
    "sets.confirmDelete": "Delete the set \"{name}\"? This cannot be undone.",

    "statSets.title": "Dino Stat Sets",
    "statSets.defaultName": "Stat Set {n}",
    "statSets.renamePrompt": "Name this stat set:",
    "statSets.renameTooltip": "Rename stat set",
    "statSets.addTooltip": "Add stat set (up to 5)",
    "statSets.deleteTooltip": "Delete stat set",
    "statSets.confirmDelete": "Delete the stat set \"{name}\"? This cannot be undone.",

    "calc.title": "Calculation Details:",
    "calc.atkLabel": "[ATK]",
    "calc.hpLabel": "[HP]",
    "calc.dpsLabel": "[DPS]",
    "calc.buildingLabel": "[Building Dmg]",
    "calc.dinoLevelLabel": "[Dino Level]",
    "calc.dpsRuneAvg": "avg rune damage per hit",

    "disclaimer.title": "⚠️ Disclaimer & Notes:",
    "disclaimer.calc.line1": "1. This is an independent fan-made tool for Dino Mutant players/community, **purely for sharing, not for profit**. Have fun! 🎮",
    "disclaimer.calc.line2": "2. All calculation results (totals, DPS, single/average proc estimates) are simulated and for reference only.",
    "disclaimer.calc.line3": "3. Actual in-game damage, healing, and proc rates may differ due to game updates, server mechanics, enemy defense, battlefield conditions, or specific skill mechanics — always check in-game values.",
    "disclaimer.calc.line4": "4. This tool is not affiliated with the official Dino Mutant game and must not be used for any commercial purpose.",
    "disclaimer.guide.line1": "1. This page is an independent fan-made guide for Dino Mutant players/community, **purely for sharing, not for profit**. Have fun! 🎮",
    "disclaimer.guide.line2": "2. Content may differ due to game updates — always check actual in-game status.",
    "disclaimer.guide.line3": "3. This page is not affiliated with the official Dino Mutant game and must not be used for any commercial purpose.",
    "disclaimer.growth.line1": "1. This is an independent fan-made tool for Dino Mutant players/community, **purely for sharing, not for profit**. Have fun! 🎮",
    "disclaimer.growth.line2": "2. All records are stored only in your current browser — switching browsers/devices or clearing browser data will lose them, so back up if needed.",
    "disclaimer.growth.line3": "3. This page is not affiliated with the official Dino Mutant game and must not be used for any commercial purpose.",

    "growth.formTitle": "Add／Edit Daily Record",
    "growth.dateLabel": "Date",
    "growth.atkLabel": "Peak Attack",
    "growth.hpLabel": "Peak HP",
    "growth.speedLabel": "Peak Speed",
    "growth.addBtn": "Add Record",
    "growth.updateBtn": "Update Record",
    "growth.cancelEditBtn": "Cancel Edit",
    "growth.alertNoDate": "Please select a date",
    "growth.confirmOverwrite": "{date} already has a record. Overwrite it?",
    "growth.confirmDelete": "Delete the record for {date}? This cannot be undone.",
    "growth.chartTitle": "Growth Trend Chart",
    "growth.rangeStart": "Start Date",
    "growth.rangeEnd": "End Date",
    "growth.resetRange": "Reset to Default Range",
    "growth.chartEmpty": "No data in this range",
    "growth.legendAtk": "Attack",
    "growth.legendHp10": "HP／10",
    "growth.legendSpeed": "Speed",
    "growth.legendLevel": "Dino Level",
    "growth.tableTitle": "Daily Records",
    "growth.colDate": "Date",
    "growth.colAtk": "Attack",
    "growth.colHp": "HP",
    "growth.colSpeed": "Speed",
    "growth.colLevel": "Dino Level",
    "growth.colCreated": "Created",
    "growth.colUpdated": "Updated",
    "growth.colActions": "Actions",
    "growth.edit": "Edit",
    "growth.delete": "Delete",
    "growth.empty": "No records yet",
    "growth.opLogBtn": "View Operation Log",
    "growth.opLogBtnHide": "Hide Operation Log",
    "growth.opLogTitle": "Operation History",
    "growth.opLogColTime": "Time",
    "growth.opLogColAction": "Action Type",
    "growth.opLogActionAdd": "Add",
    "growth.opLogActionUpdate": "Update",
    "growth.opLogActionDelete": "Delete",
    "growth.opLogEmpty": "No operation records yet",
    "growth.opLogConfirmDelete": "Delete this log entry? This cannot be undone.",

    "alert.selectSlotFirst": "Please select a rune slot first, then choose a rune",
    "alert.conflict": "\"Compression\" and \"Mammoth\" cannot be equipped together! Please unequip \"{name}\" first.",
    "alert.confirmClear": "Clear your saved rune build? This cannot be undone.",

    "runeNames": {
      "治癒": "Heal", "犧牲": "Sacrifice", "三重衝擊": "Triple Impact",
      "破壞者 I": "Breaker I", "破壞者 II": "Breaker II", "破壞者 III": "Breaker III",
      "堅硬2": "Hard Skinned II", "體力3": "Increase HP III", "攻擊力3": "Increase Attack III",
      "猛瑪": "Mammoth Power", "壓縮": "Compression Power", "吸血": "Drain Life", "強打": "Smite",
      "屏障": "Barrier", "狂戰士之怒": "Berserker's Fury", "隕石": "Meteor", "雷擊": "Thunderstrike", "荊棘": "Thorns"
    },
    "rarity": {
      "普通": "Normal", "稀有": "Rare", "史詩": "Epic", "獨特": "Unique", "傳說": "Legendary"
    },

    "effect.flatAtk": "ATK +{val}",
    "effect.flatHp": "HP +{val}",
    "effect.atkPct": "ATK {sign}{val}%",
    "effect.hpPct": "HP {sign}{val}%",
    "effect.reduceDmg": "Dmg Reduction +{val}",
    "effect.destroyer": "Building Dmg +{val}%",
    "effect.tripleStrike": "Every 3rd hit bonus {val}%",
    "effect.heal": "On hit taken, {rate}% chance to heal {val} HP",
    "effect.sacrifice": "On death, {rate}% chance to heal all allied units in the same tile/tribe for {val} HP",
    "effect.vampiric": "On attack, {rate}% chance to heal HP equal to {val}% of Attack",
    "effect.meteor": "{rate}% chance to deal {val}% skill damage",
    "effect.lightning": "{rate}% chance to deal {val}% skill damage to a single target",
    "effect.thorns": "{rate}% chance to deal {val}% skill damage to {range}",
    "effect.berserker": "Below {th1}% HP: Attack +{val1}%; below {th2}% HP: additional +{val2}%",

    "thorns.range1": "Current tile + 2 tiles in 1 direction (3 tiles total)",
    "thorns.range2": "Current tile + 3 tiles in 1 direction (4 tiles total)",
    "thorns.range3": "Current tile + 3 tiles in each of 2 directions (7 tiles total)",

    "trig.destroyerVal": "Building dmg bonus +{val}% (Lv.{lvl})",
    "trig.singleBonus": "Single bonus {val} (Lv.{lvl})",
    "trig.avgDmg": "Avg per hit: +{val} dmg",
    "trig.singleRestore": "Single heal {val} (Lv.{lvl})",
    "trig.avgRestoreRate": "Avg per hit: +{val} HP ({rate}%)",
    "trig.avgHitRate": "Avg per hit taken: +{val} HP ({rate}%)",
    "trig.avgDeathRate": "Avg per death: +{val} HP ({rate}%)",
    "trig.singleSkill": "Single skill {val} (Lv.{lvl})",
    "trig.avgDmgRate": "Avg per hit: +{val} dmg ({rate}%)",
    "trig.berserkerVal": "HP <{th1}%: +{val1}% ATK (Lv.{lvl})",
    "trig.berserkerAvg": "HP <{th2}%: additional +{val2}% ATK",

    "guide.mechTitle": "🦖 Titan (Boss) Core Mechanics",
    "guide.mech1": "<b>Level Up/Down:</b> Defeating the current Titan raises next summon's level by 1; if not defeated before it respawns, the Titan disappears and next summon's level drops by 1.",
    "guide.mech2": "<b>Reward Limit:</b> Titan hunt rewards can be claimed once per day (you can still join and deal damage even after your daily reward is used).",
    "guide.mech3": "<b>Bonus Chest Chance:</b> On settlement, chance for 1 extra chest, equal to \"Titan Level × 10%\" (reaches 100% at Titan Lv.10+).",
    "guide.rewardTitle": "Personal Damage Ranking Rewards",
    "guide.rewardColRank": "Damage Rank Range",
    "guide.rewardColAmount": "Base Reward (Chests)",
    "guide.rankSingle": "Rank {n}",
    "guide.rankRange": "Ranks {from}–{to}",
    "guide.titanTitle": "Titan Lv.1 – 200 Damage & HP",
    "guide.colLevel": "Level",
    "guide.colDamage": "Titan Damage",
    "guide.colHp": "Titan HP"
  },

  es: {
    "meta.titleCalculator": "Dino Mutant: Calculadora de Runas y Estadísticas (No oficial)",
    "meta.titleGuide": "Dino Mutant: Guía (No oficial)",
    "meta.titleGrowth": "Dino Mutant: Registro de Crecimiento (No oficial)",
    "header.calculator": "Dino Mutant: Calculadora de Runas y Estadísticas (No oficial)",
    "header.guide": "Dino Mutant: Guía (No oficial)",
    "header.growth": "Dino Mutant: Registro de Crecimiento (No oficial)",
    "nav.calculator": "🧮 Calculadora",
    "nav.guide": "📖 Guía",
    "nav.growth": "📈 Registro de Crecimiento",

    "autosave.hint": "💾 Tu configuración se guarda automáticamente en este navegador",
    "btn.clearSaved": "🗑️ Borrar configuración guardada",
    "hint.slotSelect": "Haz clic en una ranura arriba (se resaltará) para equipar/reemplazar una runa de la lista de abajo; para quitarla, usa el botón en \"Runas equipadas\"",

    "label.baseAtk": "Ataque base",
    "label.baseHp": "Vida base",
    "label.baseSpeed": "Velocidad base",
    "label.astroAtkLevel": "Nivel de ataque de constelación",
    "label.astroHpLevel": "Nivel de vida de constelación",
    "label.astroBuildLevel": "Nivel de daño a edificios de constelación",
    "astro.notSelected": "Sin seleccionar",
    "label.skinSectionTitle": "Bonificación de skins",
    "label.eggSkin": "Skin de huevo (bono % ataque, máx. 30%)",
    "label.nestSkin": "Skin de nido (bono % vida, máx. 30%)",

    "result.finalAtk": "Ataque final",
    "result.finalHp": "Vida final",
    "result.finalSpeed": "Velocidad final",
    "result.finalDps": "DPS final",
    "result.finalBuildingAtk": "Daño a edificios",
    "result.dinoLevel": "Nivel del dinosaurio",

    "trigger.title": "Estimación de activación de runas (única / promedio)",
    "trigger.empty": "Sin runas equipadas con estimación de combate",

    "equipped.title": "Estado de runas equipadas",
    "equipped.empty": "No hay runas equipadas",
    "equipped.remove": "Quitar",

    "sets.title": "Conjuntos de Runas",
    "sets.defaultName": "Conjunto {n}",
    "sets.renamePrompt": "Nombra este conjunto:",
    "sets.renameTooltip": "Renombrar conjunto",
    "sets.addTooltip": "Añadir conjunto (máx. 12)",
    "sets.deleteTooltip": "Eliminar conjunto",
    "sets.confirmDelete": "¿Eliminar el conjunto \"{name}\"? Esta acción no se puede deshacer.",

    "statSets.title": "Conjuntos de Valores",
    "statSets.defaultName": "Conjunto de Valores {n}",
    "statSets.renamePrompt": "Nombra este conjunto de valores:",
    "statSets.renameTooltip": "Renombrar conjunto de valores",
    "statSets.addTooltip": "Añadir conjunto de valores (máx. 5)",
    "statSets.deleteTooltip": "Eliminar conjunto de valores",
    "statSets.confirmDelete": "¿Eliminar el conjunto de valores \"{name}\"? Esta acción no se puede deshacer.",

    "calc.title": "Detalles del cálculo:",
    "calc.atkLabel": "[Ataque]",
    "calc.hpLabel": "[Vida]",
    "calc.dpsLabel": "[DPS]",
    "calc.buildingLabel": "[Daño a edificios]",
    "calc.dinoLevelLabel": "[Nivel del dinosaurio]",
    "calc.dpsRuneAvg": "daño promedio de runas por golpe",

    "disclaimer.title": "⚠️ Aviso legal y notas de uso:",
    "disclaimer.calc.line1": "1. Esta es una herramienta independiente hecha por fans para jugadores/comunidad de Dino Mutant, **puramente para compartir, sin fines de lucro**. ¡Que la disfrutéis! 🎮",
    "disclaimer.calc.line2": "2. Todos los resultados (totales, DPS, estimaciones de activación única/promedio) son simulaciones y solo tienen fines de referencia.",
    "disclaimer.calc.line3": "3. El daño, la curación y las probabilidades de activación reales en el juego pueden variar según actualizaciones, mecánicas del servidor, defensa enemiga, condiciones del campo de batalla o mecánicas de habilidades específicas; consulta siempre los valores reales en el juego.",
    "disclaimer.calc.line4": "4. Esta herramienta no está afiliada oficialmente a Dino Mutant y no debe usarse con fines comerciales.",
    "disclaimer.guide.line1": "1. Esta página es una guía independiente hecha por fans para jugadores/comunidad de Dino Mutant, **puramente para compartir, sin fines de lucro**. ¡Que la disfrutéis! 🎮",
    "disclaimer.guide.line2": "2. El contenido puede variar según actualizaciones del juego; consulta siempre el estado real dentro del juego.",
    "disclaimer.guide.line3": "3. Esta página no está afiliada oficialmente a Dino Mutant y no debe usarse con fines comerciales.",
    "disclaimer.growth.line1": "1. Esta es una herramienta independiente hecha por fans para jugadores/comunidad de Dino Mutant, **puramente para compartir, sin fines de lucro**. ¡Que la disfrutéis! 🎮",
    "disclaimer.growth.line2": "2. Todos los registros se guardan solo en tu navegador actual; cambiar de navegador/dispositivo o borrar los datos del navegador los eliminará, así que haz copia de seguridad si lo necesitas.",
    "disclaimer.growth.line3": "3. Esta página no está afiliada oficialmente a Dino Mutant y no debe usarse con fines comerciales.",

    "growth.formTitle": "Añadir／Editar registro diario",
    "growth.dateLabel": "Fecha",
    "growth.atkLabel": "Ataque máximo",
    "growth.hpLabel": "Vida máxima",
    "growth.speedLabel": "Velocidad máxima",
    "growth.addBtn": "Añadir registro",
    "growth.updateBtn": "Actualizar registro",
    "growth.cancelEditBtn": "Cancelar edición",
    "growth.alertNoDate": "Por favor selecciona una fecha",
    "growth.confirmOverwrite": "{date} ya tiene un registro. ¿Sobrescribirlo?",
    "growth.confirmDelete": "¿Eliminar el registro de {date}? Esta acción no se puede deshacer.",
    "growth.chartTitle": "Gráfico de tendencia de crecimiento",
    "growth.rangeStart": "Fecha de inicio",
    "growth.rangeEnd": "Fecha de fin",
    "growth.resetRange": "Restablecer rango predeterminado",
    "growth.chartEmpty": "Sin datos en este rango",
    "growth.legendAtk": "Ataque",
    "growth.legendHp10": "Vida／10",
    "growth.legendSpeed": "Velocidad",
    "growth.legendLevel": "Nivel del dinosaurio",
    "growth.tableTitle": "Registros diarios",
    "growth.colDate": "Fecha",
    "growth.colAtk": "Ataque",
    "growth.colHp": "Vida",
    "growth.colSpeed": "Velocidad",
    "growth.colLevel": "Nivel del dinosaurio",
    "growth.colCreated": "Creado",
    "growth.colUpdated": "Actualizado",
    "growth.colActions": "Acciones",
    "growth.edit": "Editar",
    "growth.delete": "Eliminar",
    "growth.empty": "Aún no hay registros",
    "growth.opLogBtn": "Ver registro de operaciones",
    "growth.opLogBtnHide": "Ocultar registro de operaciones",
    "growth.opLogTitle": "Historial de operaciones",
    "growth.opLogColTime": "Hora",
    "growth.opLogColAction": "Tipo de acción",
    "growth.opLogActionAdd": "Añadir",
    "growth.opLogActionUpdate": "Actualizar",
    "growth.opLogActionDelete": "Eliminar",
    "growth.opLogEmpty": "Aún no hay registros de operaciones",
    "growth.opLogConfirmDelete": "¿Eliminar esta entrada del registro? Esta acción no se puede deshacer.",

    "alert.selectSlotFirst": "Primero selecciona una ranura de runa y luego elige una runa",
    "alert.conflict": "\"Compresión\" y \"Mamut\" no se pueden equipar juntos. Primero quita \"{name}\".",
    "alert.confirmClear": "¿Borrar la configuración de runas guardada? Esta acción no se puede deshacer.",

    "runeNames": {
      "治癒": "Sanar", "犧牲": "Sacrificio", "三重衝擊": "Triple Impacto",
      "破壞者 I": "Destructor I", "破壞者 II": "Destructor II", "破壞者 III": "Destructor III",
      "堅硬2": "Piel Dura II", "體力3": "Aumento de Vida III", "攻擊力3": "Aumento de Ataque III",
      "猛瑪": "Poder del Mamut", "壓縮": "Potencia Compresión", "吸血": "Drenar Vida", "強打": "Aplastar",
      "屏障": "Barrera", "狂戰士之怒": "Furia del berserker", "隕石": "Meteorito", "雷擊": "Golpe de trueno", "荊棘": "Espinas"
    },
    "rarity": {
      "普通": "Común", "稀有": "Raro", "史詩": "Épico", "獨特": "Único", "傳說": "Legendario"
    },

    "effect.flatAtk": "Ataque +{val}",
    "effect.flatHp": "Vida +{val}",
    "effect.atkPct": "Ataque {sign}{val}%",
    "effect.hpPct": "Vida {sign}{val}%",
    "effect.reduceDmg": "Reducción de daño +{val}",
    "effect.destroyer": "Daño a edificios +{val}%",
    "effect.tripleStrike": "Bono cada 3er golpe {val}%",
    "effect.heal": "Al recibir daño, {rate}% de probabilidad de curar {val} de vida",
    "effect.sacrifice": "Al morir, {rate}% de probabilidad de curar {val} de vida a todas las unidades aliadas en la misma casilla/tribu",
    "effect.vampiric": "Al atacar, {rate}% de probabilidad de curar vida igual al {val}% del ataque",
    "effect.meteor": "{rate}% de probabilidad de infligir {val}% de daño de habilidad",
    "effect.lightning": "{rate}% de probabilidad de infligir {val}% de daño de habilidad a un solo objetivo",
    "effect.thorns": "{rate}% de probabilidad de infligir {val}% de daño de habilidad a {range}",
    "effect.berserker": "Vida por debajo del {th1}%: Ataque +{val1}%; por debajo del {th2}%: adicional +{val2}%",

    "thorns.range1": "Casilla actual + 2 casillas en 1 dirección (3 casillas en total)",
    "thorns.range2": "Casilla actual + 3 casillas en 1 dirección (4 casillas en total)",
    "thorns.range3": "Casilla actual + 3 casillas en cada una de 2 direcciones (7 casillas en total)",

    "trig.destroyerVal": "Bono de daño a edificios +{val}% (Nv.{lvl})",
    "trig.singleBonus": "Bono único {val} (Nv.{lvl})",
    "trig.avgDmg": "Promedio por golpe: +{val} daño",
    "trig.singleRestore": "Curación única {val} (Nv.{lvl})",
    "trig.avgRestoreRate": "Promedio por golpe: +{val} vida ({rate}%)",
    "trig.avgHitRate": "Promedio por golpe recibido: +{val} vida ({rate}%)",
    "trig.avgDeathRate": "Promedio por muerte: +{val} vida ({rate}%)",
    "trig.singleSkill": "Habilidad única {val} (Nv.{lvl})",
    "trig.avgDmgRate": "Promedio por golpe: +{val} daño ({rate}%)",
    "trig.berserkerVal": "Vida <{th1}%: +{val1}% ataque (Nv.{lvl})",
    "trig.berserkerAvg": "Vida <{th2}%: adicional +{val2}% ataque",

    "guide.mechTitle": "🦖 Mecánicas principales del Titán (Jefe)",
    "guide.mech1": "<b>Subir/bajar de nivel:</b> Derrotar al Titán actual sube el nivel de la próxima invocación en 1; si no se derrota antes de que reaparezca, el Titán desaparece y el nivel de la próxima invocación baja en 1.",
    "guide.mech2": "<b>Límite de recompensas:</b> Las recompensas de caza del Titán se pueden reclamar 1 vez al día (aún puedes entrar y ayudar a hacer daño aunque ya no puedas obtener recompensa ese día).",
    "guide.mech3": "<b>Bono de cofre extra:</b> Al liquidar, probabilidad de obtener 1 cofre adicional, igual a \"Nivel del Titán × 10%\" (alcanza el 100% a partir del Nv.10).",
    "guide.rewardTitle": "Recompensas por ranking de daño personal",
    "guide.rewardColRank": "Rango de clasificación por daño",
    "guide.rewardColAmount": "Recompensa base (cofres)",
    "guide.rankSingle": "Puesto {n}",
    "guide.rankRange": "Puestos {from}–{to}",
    "guide.titanTitle": "Titán Nv.1 – 200: Daño y Vida",
    "guide.colLevel": "Nivel",
    "guide.colDamage": "Daño del Titán",
    "guide.colHp": "Vida del Titán"
  },

  fr: {
    "meta.titleCalculator": "Dino Mutant : Calculateur de Runes et Stats (Non officiel)",
    "meta.titleGuide": "Dino Mutant : Guide (Non officiel)",
    "meta.titleGrowth": "Dino Mutant : Journal de croissance (Non officiel)",
    "header.calculator": "Dino Mutant : Calculateur de Runes et Stats (Non officiel)",
    "header.guide": "Dino Mutant : Guide (Non officiel)",
    "header.growth": "Dino Mutant : Journal de croissance (Non officiel)",
    "nav.calculator": "🧮 Calculateur",
    "nav.guide": "📖 Guide",
    "nav.growth": "📈 Journal de croissance",

    "autosave.hint": "💾 Votre configuration est enregistrée automatiquement dans ce navigateur",
    "btn.clearSaved": "🗑️ Effacer la configuration enregistrée",
    "hint.slotSelect": "Cliquez sur un emplacement ci-dessus (il sera surligné) pour équiper/remplacer une rune depuis la liste ci-dessous ; pour la retirer, utilisez le bouton dans « Runes équipées »",

    "label.baseAtk": "Attaque de base",
    "label.baseHp": "PV de base",
    "label.baseSpeed": "Vitesse de base",
    "label.astroAtkLevel": "Niveau d'attaque de constellation",
    "label.astroHpLevel": "Niveau de PV de constellation",
    "label.astroBuildLevel": "Niveau de dégâts aux bâtiments de constellation",
    "astro.notSelected": "Non sélectionné",
    "label.skinSectionTitle": "Réglages des bonus de skin",
    "label.eggSkin": "Skin d'œuf (bonus % attaque, plafond 30%)",
    "label.nestSkin": "Skin de nid (bonus % PV, plafond 30%)",

    "result.finalAtk": "Attaque finale",
    "result.finalHp": "PV finaux",
    "result.finalSpeed": "Vitesse finale",
    "result.finalDps": "DPS final",
    "result.finalBuildingAtk": "Dégâts aux bâtiments",
    "result.dinoLevel": "Niveau du dinosaure",

    "trigger.title": "Estimation d'activation des runes (unique / moyenne)",
    "trigger.empty": "Aucune rune équipée avec estimation de combat",

    "equipped.title": "Statut des runes équipées",
    "equipped.empty": "Aucune rune équipée",
    "equipped.remove": "Retirer",

    "sets.title": "Ensembles de Runes",
    "sets.defaultName": "Ensemble {n}",
    "sets.renamePrompt": "Nommez cet ensemble :",
    "sets.renameTooltip": "Renommer l'ensemble",
    "sets.addTooltip": "Ajouter un ensemble (12 max)",
    "sets.deleteTooltip": "Supprimer l'ensemble",
    "sets.confirmDelete": "Supprimer l'ensemble « {name} » ? Cette action est irréversible.",

    "statSets.title": "Ensembles de Stats",
    "statSets.defaultName": "Ensemble de Stats {n}",
    "statSets.renamePrompt": "Nommez cet ensemble de stats :",
    "statSets.renameTooltip": "Renommer l'ensemble de stats",
    "statSets.addTooltip": "Ajouter un ensemble de stats (5 max)",
    "statSets.deleteTooltip": "Supprimer l'ensemble de stats",
    "statSets.confirmDelete": "Supprimer l'ensemble de stats « {name} » ? Cette action est irréversible.",

    "calc.title": "Détails du calcul :",
    "calc.atkLabel": "[Attaque]",
    "calc.hpLabel": "[PV]",
    "calc.dpsLabel": "[DPS]",
    "calc.buildingLabel": "[Dégâts bâtiments]",
    "calc.dinoLevelLabel": "[Niveau du dinosaure]",
    "calc.dpsRuneAvg": "dégâts moyens des runes par coup",

    "disclaimer.title": "⚠️ Avertissement et notes d'utilisation :",
    "disclaimer.calc.line1": "1. Cet outil est un projet indépendant créé par des fans pour les joueurs/la communauté de Dino Mutant, **uniquement à des fins de partage, sans but lucratif**. Amusez-vous bien ! 🎮",
    "disclaimer.calc.line2": "2. Tous les résultats de calcul (totaux, DPS, estimations d'activation unique/moyenne) sont simulés et fournis à titre indicatif uniquement.",
    "disclaimer.calc.line3": "3. Les dégâts, soins et taux d'activation réels en jeu peuvent varier selon les mises à jour du jeu, les mécaniques serveur, la défense ennemie, les conditions de combat ou des mécaniques de compétences spécifiques ; référez-vous toujours aux valeurs affichées en jeu.",
    "disclaimer.calc.line4": "4. Cet outil n'est pas affilié au jeu officiel Dino Mutant et ne doit pas être utilisé à des fins commerciales.",
    "disclaimer.guide.line1": "1. Cette page est un guide indépendant créé par des fans pour les joueurs/la communauté de Dino Mutant, **uniquement à des fins de partage, sans but lucratif**. Amusez-vous bien ! 🎮",
    "disclaimer.guide.line2": "2. Le contenu peut varier selon les mises à jour du jeu ; référez-vous toujours à l'état réel en jeu.",
    "disclaimer.guide.line3": "3. Cette page n'est pas affiliée au jeu officiel Dino Mutant et ne doit pas être utilisée à des fins commerciales.",
    "disclaimer.growth.line1": "1. Cet outil est un projet indépendant créé par des fans pour les joueurs/la communauté de Dino Mutant, **uniquement à des fins de partage, sans but lucratif**. Amusez-vous bien ! 🎮",
    "disclaimer.growth.line2": "2. Tous les enregistrements sont stockés uniquement dans votre navigateur actuel ; changer de navigateur/appareil ou effacer les données du navigateur les supprimera, pensez à faire une sauvegarde si nécessaire.",
    "disclaimer.growth.line3": "3. Cette page n'est pas affiliée au jeu officiel Dino Mutant et ne doit pas être utilisée à des fins commerciales.",

    "growth.formTitle": "Ajouter／Modifier un relevé quotidien",
    "growth.dateLabel": "Date",
    "growth.atkLabel": "Attaque maximale",
    "growth.hpLabel": "PV maximum",
    "growth.speedLabel": "Vitesse maximale",
    "growth.addBtn": "Ajouter le relevé",
    "growth.updateBtn": "Mettre à jour le relevé",
    "growth.cancelEditBtn": "Annuler la modification",
    "growth.alertNoDate": "Veuillez sélectionner une date",
    "growth.confirmOverwrite": "{date} a déjà un relevé. L'écraser ?",
    "growth.confirmDelete": "Supprimer le relevé du {date} ? Cette action est irréversible.",
    "growth.chartTitle": "Graphique de progression",
    "growth.rangeStart": "Date de début",
    "growth.rangeEnd": "Date de fin",
    "growth.resetRange": "Réinitialiser la plage par défaut",
    "growth.chartEmpty": "Aucune donnée dans cette plage",
    "growth.legendAtk": "Attaque",
    "growth.legendHp10": "PV／10",
    "growth.legendSpeed": "Vitesse",
    "growth.legendLevel": "Niveau du dinosaure",
    "growth.tableTitle": "Relevés quotidiens",
    "growth.colDate": "Date",
    "growth.colAtk": "Attaque",
    "growth.colHp": "PV",
    "growth.colSpeed": "Vitesse",
    "growth.colLevel": "Niveau du dinosaure",
    "growth.colCreated": "Créé le",
    "growth.colUpdated": "Modifié le",
    "growth.colActions": "Actions",
    "growth.edit": "Modifier",
    "growth.delete": "Supprimer",
    "growth.empty": "Aucun relevé pour le moment",
    "growth.opLogBtn": "Voir l'historique des opérations",
    "growth.opLogBtnHide": "Masquer l'historique des opérations",
    "growth.opLogTitle": "Historique des opérations",
    "growth.opLogColTime": "Heure",
    "growth.opLogColAction": "Type d'action",
    "growth.opLogActionAdd": "Ajout",
    "growth.opLogActionUpdate": "Modification",
    "growth.opLogActionDelete": "Suppression",
    "growth.opLogEmpty": "Aucun historique d'opération pour le moment",
    "growth.opLogConfirmDelete": "Supprimer cette entrée de l'historique ? Cette action est irréversible.",

    "alert.selectSlotFirst": "Veuillez d'abord sélectionner un emplacement de rune, puis choisir une rune",
    "alert.conflict": "« Compression » et « Mammouth » ne peuvent pas être équipés ensemble ! Retirez d'abord « {name} ».",
    "alert.confirmClear": "Effacer la configuration de runes enregistrée ? Cette action est irréversible.",

    "runeNames": {
      "治癒": "Soin", "犧牲": "Sacrifice", "三重衝擊": "Triple Impact",
      "破壞者 I": "Briseur I", "破壞者 II": "Briseur II", "破壞者 III": "Briseur III",
      "堅硬2": "Peau dure II", "體力3": "Augmentation des PV III", "攻擊力3": "Augmentation des I'attaque III",
      "猛瑪": "Puissance Mammouth", "壓縮": "Puissance compacte", "吸血": "Drain de vie", "強打": "Frappe",
      "屏障": "Barrière", "狂戰士之怒": "Fureur du Berserker", "隕石": "Météore", "雷擊": "Coup de tonnerre", "荊棘": "Épines"
    },
    "rarity": {
      "普通": "Commun", "稀有": "Rare", "史詩": "Épique", "獨特": "Unique", "傳說": "Légendaire"
    },

    "effect.flatAtk": "Attaque +{val}",
    "effect.flatHp": "PV +{val}",
    "effect.atkPct": "Attaque {sign}{val}%",
    "effect.hpPct": "PV {sign}{val}%",
    "effect.reduceDmg": "Réduction de dégâts +{val}",
    "effect.destroyer": "Dégâts aux bâtiments +{val}%",
    "effect.tripleStrike": "Bonus tous les 3 coups {val}%",
    "effect.heal": "En cas de dégâts subis, {rate}% de chance de soigner {val} PV",
    "effect.sacrifice": "À la mort, {rate}% de chance de soigner {val} PV à toutes les unités alliées de la même case/tribu",
    "effect.vampiric": "En attaquant, {rate}% de chance de soigner des PV égaux à {val}% de l'attaque",
    "effect.meteor": "{rate}% de chance d'infliger {val}% de dégâts de compétence",
    "effect.lightning": "{rate}% de chance d'infliger {val}% de dégâts de compétence à une seule cible",
    "effect.thorns": "{rate}% de chance d'infliger {val}% de dégâts de compétence à {range}",
    "effect.berserker": "PV sous {th1}% : Attaque +{val1}% ; sous {th2}% : +{val2}% supplémentaire",

    "thorns.range1": "Case actuelle + 2 cases dans 1 direction (3 cases au total)",
    "thorns.range2": "Case actuelle + 3 cases dans 1 direction (4 cases au total)",
    "thorns.range3": "Case actuelle + 3 cases dans chacune de 2 directions (7 cases au total)",

    "trig.destroyerVal": "Bonus dégâts aux bâtiments +{val}% (Nv.{lvl})",
    "trig.singleBonus": "Bonus unique {val} (Nv.{lvl})",
    "trig.avgDmg": "Moyenne par coup : +{val} dégâts",
    "trig.singleRestore": "Soin unique {val} (Nv.{lvl})",
    "trig.avgRestoreRate": "Moyenne par coup : +{val} PV ({rate}%)",
    "trig.avgHitRate": "Moyenne par coup subi : +{val} PV ({rate}%)",
    "trig.avgDeathRate": "Moyenne par mort : +{val} PV ({rate}%)",
    "trig.singleSkill": "Compétence unique {val} (Nv.{lvl})",
    "trig.avgDmgRate": "Moyenne par coup : +{val} dégâts ({rate}%)",
    "trig.berserkerVal": "PV <{th1}% : +{val1}% attaque (Nv.{lvl})",
    "trig.berserkerAvg": "PV <{th2}% : +{val2}% attaque supplémentaire",

    "guide.mechTitle": "🦖 Mécaniques principales du Titan (Boss)",
    "guide.mech1": "<b>Montée/descente de niveau :</b> Vaincre le Titan actuel augmente le niveau de la prochaine invocation de 1 ; s'il n'est pas vaincu avant sa réapparition, le Titan disparaît et le niveau de la prochaine invocation diminue de 1.",
    "guide.mech2": "<b>Limite de récompenses :</b> Les récompenses de chasse au Titan peuvent être réclamées 1 fois par jour (vous pouvez toujours participer et infliger des dégâts même sans récompense disponible ce jour-là).",
    "guide.mech3": "<b>Bonus de coffre supplémentaire :</b> Au décompte, chance d'obtenir 1 coffre supplémentaire, égale à « Niveau du Titan × 10% » (atteint 100% dès le Nv.10).",
    "guide.rewardTitle": "Récompenses selon le classement des dégâts personnels",
    "guide.rewardColRank": "Tranche de classement des dégâts",
    "guide.rewardColAmount": "Récompense de base (coffres)",
    "guide.rankSingle": "Rang {n}",
    "guide.rankRange": "Rangs {from}–{to}",
    "guide.titanTitle": "Titan Nv.1 – 200 : Dégâts et PV",
    "guide.colLevel": "Niveau",
    "guide.colDamage": "Dégâts du Titan",
    "guide.colHp": "PV du Titan"
  },

  ja: {
    "meta.titleCalculator": "『Dino Mutant』ルーン編成・数値計算機（非公式）",
    "meta.titleGuide": "『Dino Mutant』攻略（非公式）",
    "meta.titleGrowth": "『Dino Mutant』成長記録（非公式）",
    "header.calculator": "『Dino Mutant』ルーン編成・数値計算機（非公式）",
    "header.guide": "『Dino Mutant』攻略（非公式）",
    "header.growth": "『Dino Mutant』成長記録（非公式）",
    "nav.calculator": "🧮 計算機",
    "nav.guide": "📖 攻略",
    "nav.growth": "📈 成長記録",

    "autosave.hint": "💾 設定はこのブラウザに自動保存されます",
    "btn.clearSaved": "🗑️ 保存データを削除",
    "hint.slotSelect": "上のスロットをクリック（ハイライト表示）してから下のリストからルーンを選ぶと装備・交換できます。取り外しは下の「装備中のルーン」欄のボタンから行ってください",

    "label.baseAtk": "基礎攻撃力",
    "label.baseHp": "基礎HP",
    "label.baseSpeed": "基礎速度",
    "label.astroAtkLevel": "コンステレーション攻撃レベル",
    "label.astroHpLevel": "コンステレーションHPレベル",
    "label.astroBuildLevel": "コンステレーション建物ダメージレベル",
    "astro.notSelected": "未選択",
    "label.skinSectionTitle": "スキンボーナス設定",
    "label.eggSkin": "エッグスキン（攻撃力%ボーナス、上限30%）",
    "label.nestSkin": "ネストスキン（HP%ボーナス、上限30%）",

    "result.finalAtk": "最終攻撃力",
    "result.finalHp": "最終HP",
    "result.finalSpeed": "最終速度",
    "result.finalDps": "最終DPS",
    "result.finalBuildingAtk": "建物ダメージ",
    "result.dinoLevel": "恐竜レベル",

    "trigger.title": "ルーン発動シミュレーション（単発／平均期待値）",
    "trigger.empty": "実戦シミュレーション対象のルーンは未装備です",

    "equipped.title": "装備中のルーン",
    "equipped.empty": "ルーンは未装備です",
    "equipped.remove": "外す",

    "sets.title": "ルーンセット",
    "sets.defaultName": "セット{n}",
    "sets.renamePrompt": "このセットの名前を入力：",
    "sets.renameTooltip": "セット名を変更",
    "sets.addTooltip": "セットを追加（最大12個）",
    "sets.deleteTooltip": "セットを削除",
    "sets.confirmDelete": "「{name}」を削除しますか？この操作は取り消せません。",

    "statSets.title": "数値セット",
    "statSets.defaultName": "数値セット{n}",
    "statSets.renamePrompt": "この数値セットの名前を入力：",
    "statSets.renameTooltip": "数値セット名を変更",
    "statSets.addTooltip": "数値セットを追加（最大5個）",
    "statSets.deleteTooltip": "数値セットを削除",
    "statSets.confirmDelete": "「{name}」を削除しますか？この操作は取り消せません。",

    "calc.title": "計算過程の詳細：",
    "calc.atkLabel": "[攻撃力]",
    "calc.hpLabel": "[HP]",
    "calc.dpsLabel": "[DPS]",
    "calc.buildingLabel": "[建物ダメージ]",
    "calc.dinoLevelLabel": "[恐竜レベル]",
    "calc.dpsRuneAvg": "ルーン平均追加ダメージ",

    "disclaimer.title": "⚠️ 免責事項・利用上の注意：",
    "disclaimer.calc.line1": "1. 本ツールは『Dino Mutant』プレイヤー個人／コミュニティが独自に開発した非公式の補助ツールです。**純粋な情報共有目的であり、営利目的ではありません**。楽しいゲームライフを！🎮",
    "disclaimer.calc.line2": "2. すべての計算結果（合計値、DPS、実戦発動の単発・平均期待値を含む）はシミュレーションであり、参考情報です。",
    "disclaimer.calc.line3": "3. 実際のゲーム内ダメージ・回復量・発動確率は、ゲームのアップデート、サーバー仕様、敵の防御力、戦場状況、特定のスキル仕様などにより異なる場合があります。実際のゲーム内表示を基準にしてください。",
    "disclaimer.calc.line4": "4. 本ツールは『Dino Mutant』の公式とは一切関係ありません。商業目的での利用はご遠慮ください。",
    "disclaimer.guide.line1": "1. 本ページは『Dino Mutant』プレイヤー個人／コミュニティが独自にまとめた非公式の攻略情報です。**純粋な情報共有目的であり、営利目的ではありません**。楽しいゲームライフを！🎮",
    "disclaimer.guide.line2": "2. 内容はゲームのアップデートにより異なる場合があります。実際のゲーム内状況を基準にしてください。",
    "disclaimer.guide.line3": "3. 本ページは『Dino Mutant』の公式とは一切関係ありません。商業目的での利用はご遠慮ください。",
    "disclaimer.growth.line1": "1. 本ツールは『Dino Mutant』プレイヤー個人／コミュニティが独自に開発した非公式の補助ツールです。**純粋な情報共有目的であり、営利目的ではありません**。楽しいゲームライフを！🎮",
    "disclaimer.growth.line2": "2. すべての記録は現在お使いのブラウザにのみ保存されます。ブラウザや端末を変更したり、ブラウザのデータを消去すると記録は失われますので、必要に応じてバックアップしてください。",
    "disclaimer.growth.line3": "3. 本ページは『Dino Mutant』の公式とは一切関係ありません。商業目的での利用はご遠慮ください。",

    "growth.formTitle": "日次記録の追加／編集",
    "growth.dateLabel": "日付",
    "growth.atkLabel": "最高攻撃力",
    "growth.hpLabel": "最高HP",
    "growth.speedLabel": "最高速度",
    "growth.addBtn": "記録を追加",
    "growth.updateBtn": "記録を更新",
    "growth.cancelEditBtn": "編集をキャンセル",
    "growth.alertNoDate": "日付を選択してください",
    "growth.confirmOverwrite": "{date} にはすでに記録があります。上書きしますか？",
    "growth.confirmDelete": "{date} の記録を削除しますか？この操作は取り消せません。",
    "growth.chartTitle": "成長推移グラフ",
    "growth.rangeStart": "開始日",
    "growth.rangeEnd": "終了日",
    "growth.resetRange": "デフォルト範囲にリセット",
    "growth.chartEmpty": "この範囲にはデータがありません",
    "growth.legendAtk": "攻撃力",
    "growth.legendHp10": "HP／10",
    "growth.legendSpeed": "速度",
    "growth.legendLevel": "恐竜レベル",
    "growth.tableTitle": "日次記録",
    "growth.colDate": "日付",
    "growth.colAtk": "攻撃力",
    "growth.colHp": "HP",
    "growth.colSpeed": "速度",
    "growth.colLevel": "恐竜レベル",
    "growth.colCreated": "記入日時",
    "growth.colUpdated": "更新日時",
    "growth.colActions": "操作",
    "growth.edit": "編集",
    "growth.delete": "削除",
    "growth.empty": "記録はまだありません",
    "growth.opLogBtn": "操作履歴を見る",
    "growth.opLogBtnHide": "操作履歴を閉じる",
    "growth.opLogTitle": "操作履歴",
    "growth.opLogColTime": "操作時間",
    "growth.opLogColAction": "操作種類",
    "growth.opLogActionAdd": "追加",
    "growth.opLogActionUpdate": "更新",
    "growth.opLogActionDelete": "削除",
    "growth.opLogEmpty": "操作履歴はまだありません",
    "growth.opLogConfirmDelete": "この操作履歴を削除しますか？この操作は取り消せません。",

    "alert.selectSlotFirst": "先に装備したいルーンスロットを選択してから、ルーンを選んでください",
    "alert.conflict": "「圧縮」と「マンモス」は同時に装備できません。先に「{name}」を外してください。",
    "alert.confirmClear": "保存されているルーン編成を削除しますか？この操作は取り消せません。",

    "runeNames": {
      "治癒": "ヒール", "犧牲": "犠牲", "三重衝擊": "トリプルインパクト",
      "破壞者 I": "破壊者 I", "破壞者 II": "破壊者 II", "破壞者 III": "破壊者 III",
      "堅硬2": "硬い肌 II", "體力3": "体力III", "攻擊力3": "攻撃力III",
      "猛瑪": "マンモス", "壓縮": "圧縮", "吸血": "吸血", "強打": "スマイト",
      "屏障": "防壁", "狂戰士之怒": "バーサーカーの怒り", "隕石": "隕石", "雷擊": "落雷", "荊棘": "トゲ"
    },
    "rarity": {
      "普通": "ノーマル", "稀有": "レア", "史詩": "エピック", "獨特": "ユニーク", "傳說": "レジェンド"
    },

    "effect.flatAtk": "攻撃力 +{val}",
    "effect.flatHp": "HP +{val}",
    "effect.atkPct": "攻撃力 {sign}{val}%",
    "effect.hpPct": "HP {sign}{val}%",
    "effect.reduceDmg": "被ダメージ軽減 +{val}",
    "effect.destroyer": "建物へのダメージ +{val}%",
    "effect.tripleStrike": "3回攻撃ごとに追加ダメージ {val}%",
    "effect.heal": "被弾時、{rate}%の確率でHPを{val}回復",
    "effect.sacrifice": "戦闘不能時、{rate}%の確率で同じマス・同部族の全ユニットのHPを{val}回復",
    "effect.vampiric": "攻撃時、{rate}%の確率で攻撃力の{val}%分のHPを回復",
    "effect.meteor": "{rate}%の確率でスキルダメージ{val}%を発生",
    "effect.lightning": "{rate}%の確率で単体にスキルダメージ{val}%を発生",
    "effect.thorns": "{rate}%の確率で{range}にスキルダメージ{val}%を発生",
    "effect.berserker": "HPが{th1}%未満で攻撃力+{val1}%、{th2}%未満でさらに+{val2}%",

    "thorns.range1": "現在マス＋直線1方向へ2マス（計3マス）",
    "thorns.range2": "現在マス＋直線1方向へ3マス（計4マス）",
    "thorns.range3": "現在マス＋直線2方向へ各3マス（計7マス）",

    "trig.destroyerVal": "建物ダメージボーナス +{val}%（Lv.{lvl}）",
    "trig.singleBonus": "単発ボーナス {val}（Lv.{lvl}）",
    "trig.avgDmg": "1撃あたり平均：+{val} ダメージ",
    "trig.singleRestore": "単発回復量 {val}（Lv.{lvl}）",
    "trig.avgRestoreRate": "1撃あたり平均：+{val} HP（{rate}%）",
    "trig.avgHitRate": "被弾あたり平均：+{val} HP（{rate}%）",
    "trig.avgDeathRate": "戦闘不能あたり平均：+{val} HP（{rate}%）",
    "trig.singleSkill": "単発スキルダメージ {val}（Lv.{lvl}）",
    "trig.avgDmgRate": "1撃あたり平均：+{val} ダメージ（{rate}%）",
    "trig.berserkerVal": "HP <{th1}%：攻撃力+{val1}%（Lv.{lvl}）",
    "trig.berserkerAvg": "HP <{th2}%：さらに+{val2}% 攻撃力",

    "guide.mechTitle": "🦖 タイタン（ボス）の基本メカニクス",
    "guide.mech1": "<b>レベル増減：</b>現在のタイタンを討伐すると次回召喚時のレベルが1上昇。再出現までに討伐できなければタイタンは消滅し、次回召喚時のレベルが1低下します。",
    "guide.mech2": "<b>報酬受取制限：</b>タイタン討伐報酬は1日1回まで受け取り可能（その日の報酬を受け取れなくても、参戦してダメージを与えることは可能）。",
    "guide.mech3": "<b>追加ドロップボーナス：</b>清算時、追加で宝箱を1個獲得できる確率があり、その確率は「タイタンレベル × 10%」（タイタンLv.10以上で確率100%に到達）。",
    "guide.rewardTitle": "個人ダメージランキング報酬区間",
    "guide.rewardColRank": "ダメージ順位区間",
    "guide.rewardColAmount": "基本報酬数（宝箱）",
    "guide.rankSingle": "{n}位",
    "guide.rankRange": "{from}～{to}位",
    "guide.titanTitle": "タイタン Lv.1～200 ダメージ・HP一覧",
    "guide.colLevel": "レベル",
    "guide.colDamage": "タイタンダメージ",
    "guide.colHp": "タイタンHP"
  }
};

const LANG_STORAGE_KEY = 'dinoMutantLang';
const SUPPORTED_LANGS = ['zh', 'en', 'es', 'fr', 'ja'];

function getCurrentLang() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  } catch (err) {}
  return 'zh';
}

let currentLang = getCurrentLang();

// 多數 key 是扁平的 "a.b" 字串本身；runeNames/rarity 則是巢狀物件，
// 所以先試扁平查找，找不到再退回逐層路徑查找。
function lookup(lang, key) {
  const dict = translations[lang];
  if (!dict) return undefined;
  if (dict[key] !== undefined) return dict[key];

  const path = key.split('.');
  let node = dict;
  for (const p of path) {
    node = node && node[p];
  }
  return node;
}

function t(key, vars) {
  let node = lookup(currentLang, key);
  if (node === undefined) node = lookup('zh', key);
  if (typeof node !== 'string') return key;

  if (vars) {
    return node.replace(/\{(\w+)\}/g, (match, name) => (vars[name] !== undefined ? vars[name] : match));
  }
  return node;
}

function translateRuneName(zhName) {
  return t(`runeNames.${zhName}`);
}

function translateRarity(zhRarity) {
  return t(`rarity.${zhRarity}`);
}

// 套用所有靜態文字 (data-i18n / data-i18n-html / data-i18n-placeholder)
function applyStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.querySelectorAll('[data-i18n-tooltip]').forEach(el => {
    el.title = t(el.getAttribute('data-i18n-tooltip'));
  });
  const titleKey = document.documentElement.getAttribute('data-i18n-title');
  if (titleKey) document.title = t(titleKey);

  const langSelect = document.getElementById('langSelect');
  if (langSelect) langSelect.value = currentLang;
}

function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  currentLang = lang;
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (err) {}
  applyStaticTranslations();
  if (typeof onLanguageChange === 'function') onLanguageChange();
}

document.addEventListener('DOMContentLoaded', applyStaticTranslations);
