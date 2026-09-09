const crypto = require('crypto');

function getCookie(req, name) {
  const cookies = req.headers.cookie || '';
  const match = cookies
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith(name + '='));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : null;
}

function verifySession(token) {
  if (!token || !process.env.SESSION_SECRET) return false;

  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [payloadB64, sig] = parts;

  const expectedSig = crypto.createHmac('sha256', process.env.SESSION_SECRET).update(payloadB64).digest('hex');
  const sigBuf = Buffer.from(sig);
  const expectedBuf = Buffer.from(expectedSig);
  if (sigBuf.length !== expectedBuf.length || !crypto.timingSafeEqual(sigBuf, expectedBuf)) return false;

  const payload = Buffer.from(payloadB64, 'base64').toString('utf8');
  const [role, expiry] = payload.split(':');
  if (role !== 'admin') return false;
  if (!expiry || Date.now() > parseInt(expiry, 10)) return false;

  return true;
}

// 星座升級攻略資料 (已用程式驗證累計欄位與遞增邏輯正確)
// 欄位順序: 節點, 榮譽, 巢穴LV, 升級-石/果/葉/晶/魂, 累計-石/果/葉/晶/魂,
//          體力(增/累), 攻擊(增/累), 爆率%(增/累), 爆傷%(增/累), 建傷(增/累), 燉菜(增/累)
const CONSTELLATION_DATA = [
  [1,250,1,8,0,0,0,0,8,0,0,0,0,10,10,1,1,0.02,0.02,0.07,0.07,1,1,1,1],
  [2,500,1,16,1,0,0,0,24,1,0,0,0,10,20,1,2,0.02,0.04,0.07,0.14,1,2,1,2],
  [3,750,1,24,1,0,0,0,48,2,0,0,0,10,30,1,3,0.02,0.06,0.07,0.21,1,3,1,3],
  [4,1000,1,30,1,0,0,0,78,3,0,0,0,10,40,1,4,0.02,0.08,0.07,0.28,1,4,1,4],
  [5,1250,1,38,1,0,0,0,116,4,0,0,0,20,60,2,6,0.04,0.12,0.14,0.42,2,6,1,5],
  [6,1500,1,46,1,0,0,0,162,5,0,0,0,20,80,2,8,0.04,0.16,0.14,0.56,2,8,1,6],
  [7,1750,1,54,1,0,0,0,216,6,0,0,0,20,100,2,10,0.04,0.20,0.14,0.70,2,10,1,7],
  [8,2000,1,62,1,0,0,0,278,7,0,0,0,20,120,2,12,0.04,0.24,0.14,0.84,2,12,1,8],
  [9,2250,1,69,1,0,0,0,347,8,0,0,0,30,150,3,15,0.06,0.30,0.20,1.04,3,15,1,9],
  [10,2500,1,77,1,0,0,0,424,9,0,0,0,30,180,3,18,0.06,0.36,0.20,1.24,3,18,1,10],
  [11,2750,1,85,1,0,0,0,509,10,0,0,0,30,210,3,21,0.06,0.42,0.20,1.44,3,21,1,11],
  [12,3000,1,92,1,0,0,0,601,11,0,0,0,40,250,4,25,0.07,0.49,0.27,1.71,4,25,1,12],
  [13,3250,6,7,6,0,0,0,608,17,0,0,0,70,320,7,32,0.13,0.62,0.47,2.18,7,32,2,14],
  [14,3500,6,14,12,0,0,0,622,29,0,0,0,80,400,8,40,0.15,0.77,0.54,2.72,8,40,2,16],
  [15,3750,6,22,18,0,0,0,644,47,0,0,0,80,480,8,48,0.15,0.92,0.54,3.26,8,48,2,18],
  [16,4000,6,29,24,0,0,0,673,71,0,0,0,80,560,8,56,0.15,1.07,0.54,3.80,8,56,2,20],
  [17,4250,6,36,30,0,0,0,709,101,0,0,0,80,640,8,64,0.15,1.22,0.54,4.34,8,64,2,22],
  [18,4500,6,43,36,0,0,0,752,137,0,0,0,80,720,8,72,0.15,1.37,0.54,4.88,8,72,2,24],
  [19,4750,6,43,36,0,0,0,795,173,0,0,0,80,800,8,80,0.15,1.52,0.54,5.42,8,80,2,26],
  [20,5000,6,50,42,0,0,0,845,215,0,0,0,90,890,9,89,0.17,1.69,0.61,6.03,9,89,2,28],
  [21,5250,6,58,48,0,0,0,903,263,0,0,0,90,980,9,98,0.17,1.86,0.61,6.64,9,98,2,30],
  [22,5500,6,65,54,0,0,0,968,317,0,0,0,90,1070,9,107,0.17,2.03,0.61,7.25,9,107,2,32],
  [23,5750,6,65,54,0,0,0,1033,371,0,0,0,90,1160,9,116,0.17,2.20,0.61,7.86,9,116,2,34],
  [24,6000,6,72,60,0,0,0,1105,431,0,0,0,90,1250,9,125,0.17,2.37,0.61,8.47,9,125,2,36],
  [25,6250,6,79,66,0,0,0,1184,497,0,0,0,100,1350,10,135,0.19,2.56,0.68,9.15,10,135,2,38],
  [26,6500,6,86,72,0,0,0,1270,569,0,0,0,100,1450,10,145,0.19,2.75,0.68,9.83,10,145,2,40],
  [27,6750,6,94,78,0,0,0,1364,647,0,0,0,100,1550,10,155,0.19,2.94,0.68,10.51,10,155,2,42],
  [28,7000,6,101,84,0,0,0,1465,731,0,0,0,100,1650,10,165,0.19,3.13,0.68,11.19,10,165,2,44],
  [29,7250,6,108,90,0,0,0,1573,821,0,0,0,100,1750,10,175,0.19,3.32,0.68,11.87,10,175,2,46],
  [30,7500,6,115,96,0,0,0,1688,917,0,0,0,110,1860,11,186,0.20,3.52,0.74,12.61,11,186,3,49],
  [31,7750,8,10,6,7,0,0,1698,923,7,0,0,250,2110,25,211,0.46,3.98,1.69,14.30,25,211,5,54],
  [32,8000,8,30,17,21,0,0,1728,940,28,0,0,280,2390,28,239,0.52,4.50,1.89,16.19,28,239,6,60],
  [33,8250,8,40,23,29,0,0,1768,963,57,0,0,310,2700,31,270,0.57,5.07,2.09,18.28,31,270,7,67],
  [34,8500,8,50,29,36,0,0,1818,992,93,0,0,350,3050,35,305,0.65,5.72,2.36,20.64,35,305,7,74],
  [35,8750,8,60,34,43,0,0,1878,1026,136,0,0,380,3430,38,343,0.70,6.42,2.57,23.21,38,343,8,82],
  [36,9000,8,80,48,57,0,0,1958,1074,193,0,0,410,3840,41,384,0.76,7.18,2.77,25.98,41,384,9,91],
  [37,9250,8,90,51,64,0,0,2048,1125,257,0,0,440,4280,44,428,0.81,7.99,2.97,28.95,44,428,9,100],
  [38,9500,8,100,57,71,0,0,2148,1182,328,0,0,470,4750,47,475,0.87,8.86,3.17,32.12,47,475,10,110],
  [39,9750,8,120,69,86,0,0,2268,1251,414,0,0,500,5250,50,525,0.93,9.79,3.38,35.50,50,525,10,120],
  [40,10000,8,120,69,86,0,0,2388,1320,500,0,0,550,5800,55,580,1.02,10.81,3.71,39.21,55,580,11,131],
  [41,10250,12,18,16,8,24,0,2406,1336,508,24,0,1060,6860,106,686,1.96,12.77,7.16,46.37,106,686,35,166],
  [42,10500,12,36,32,16,48,0,2442,1368,524,72,0,1130,7990,113,799,2.09,14.86,7.63,54.00,113,799,38,204],
  [43,10750,12,54,48,24,72,0,2496,1416,548,144,0,1210,9200,121,920,2.24,17.10,8.17,62.17,121,920,40,244],
  [44,11000,12,94,83,42,125,0,2590,1499,590,269,0,1280,10480,128,1048,2.37,19.47,8.64,70.81,128,1048,43,287],
  [45,11250,12,101,90,45,134,0,2691,1589,635,403,0,1360,11840,136,1184,2.52,21.99,9.18,79.99,136,1184,45,332],
  [46,11500,12,135,120,60,180,0,2826,1709,695,583,0,1440,13280,144,1328,2.66,24.65,9.72,89.71,144,1328,48,380],
  [47,11750,12,162,144,72,216,250,2988,1853,767,799,250,1520,14800,152,1480,2.81,27.46,10.26,99.97,152,1480,50,430],
  [48,12000,12,189,168,84,252,300,3177,2021,851,1051,550,1590,16390,159,1639,2.94,30.40,10.73,110.70,159,1639,53,483],
  [49,12250,12,'-','-','-','-',350,'-','-','-','-',900,1720,18110,172,1811,3.18,33.58,11.61,122.31,172,1811,57,540],
  [50,12500,12,'-','-','-','-',400,'-','-','-','-',1300,1890,20000,189,2000,3.50,37.08,12.76,135.07,189,2000,63,603]
];

function fmtNum(v) {
  if (v === '-' || v === null || v === undefined) return '-';
  return Number(v).toLocaleString();
}

function fmtPct(v) {
  if (v === '-' || v === null || v === undefined) return '-';
  return Number(v).toFixed(2) + '%';
}

function renderConstellationRows() {
  return CONSTELLATION_DATA.map((r) => {
    const [
      node, honor, nestLv,
      uS, uF, uL, uC, uSoul,
      cS, cF, cL, cC, cSoul,
      hpG, hpC, dmgG, dmgC,
      crG, crC, cdG, cdC,
      bdG, bdC, stG, stC
    ] = r;
    const cells = [
      node, fmtNum(honor), nestLv,
      fmtNum(uS), fmtNum(uF), fmtNum(uL), fmtNum(uC), fmtNum(uSoul),
      fmtNum(cS), fmtNum(cF), fmtNum(cL), fmtNum(cC), fmtNum(cSoul),
      fmtNum(hpG), fmtNum(hpC), fmtNum(dmgG), fmtNum(dmgC),
      fmtPct(crG), fmtPct(crC), fmtPct(cdG), fmtPct(cdC),
      fmtNum(bdG), fmtNum(bdC), fmtNum(stG), fmtNum(stC)
    ];
    return `<tr>${cells.map((c) => `<td>${c}</td>`).join('')}</tr>`;
  }).join('');
}

function loginPageHtml(showError) {
  return `<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>管理員登入</title>
<link rel="stylesheet" href="/style.css">
</head>
<body>
  <div class="app-header"><div class="app-title">🔒 管理員登入</div></div>
  <div class="main-wrapper" style="justify-content:center;">
    <div class="left-column" style="max-width:340px;">
      <form class="equipped-panel" method="POST" action="/api/admin-login" style="gap:12px;">
        ${showError ? '<div style="color:#ff5252;font-size:12px;">密碼錯誤，請再試一次</div>' : ''}
        <div class="stat-input-group">
          <label for="pw">管理員密碼</label>
          <input type="password" id="pw" name="password" class="stat-input" autofocus required>
        </div>
        <button type="submit" class="action-btn">登入</button>
      </form>
    </div>
  </div>
</body>
</html>`;
}

function adminPageHtml() {
  return `<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>管理員後台</title>
<link rel="stylesheet" href="/style.css">
<style>
  .admin-subheading { font-size: 13px; font-weight: bold; color: #76c720; margin: 14px 0 6px; }
  .admin-subheading:first-child { margin-top: 0; }
  .admin-note { font-size: 11px; color: #8a8a9e; margin-top: 10px; line-height: 1.6; }
</style>
</head>
<body>
  <div class="app-header"><div class="app-title">🔒 管理員後台</div></div>
  <div class="main-wrapper">
    <div class="left-column" style="max-width:900px;">
      <div class="file-action-bar">
        <span class="autosave-hint">已登入為管理員</span>
        <form method="POST" action="/api/admin-logout">
          <button type="submit" class="action-btn">登出</button>
        </form>
      </div>

      <div class="equipped-panel">
        <div class="panel-header"><span>符文升級攻略</span></div>

        <div class="admin-subheading">每級升級需求粉末數</div>
        <div class="guide-table-scroll" style="max-height:none;">
          <table class="guide-table">
            <thead>
              <tr><th>等級</th><th>普通</th><th>稀有</th><th>史詩</th><th>獨特</th><th>傳說</th></tr>
            </thead>
            <tbody>
              <tr><td>Lv.02-05</td><td>5</td><td>15</td><td>75</td><td>150</td><td>300</td></tr>
              <tr><td>Lv.07-10</td><td>6</td><td>18</td><td>90</td><td>180</td><td>360</td></tr>
              <tr><td>Lv.12-15</td><td>7</td><td>21</td><td>105</td><td>210</td><td>420</td></tr>
              <tr><td>Lv.17-20</td><td>8</td><td>24</td><td>120</td><td>240</td><td>480</td></tr>
              <tr><td>Lv.22-25</td><td>9</td><td>27</td><td>135</td><td>270</td><td>540</td></tr>
              <tr><td>Lv.27-30</td><td>10</td><td>30</td><td>150</td><td>300</td><td>600</td></tr>
            </tbody>
          </table>
        </div>

        <div class="admin-subheading">升級需求符文數 (Lv.6／11／16／21／26／31 額外需要)</div>
        <div class="guide-table-scroll" style="max-height:none;">
          <table class="guide-table">
            <thead>
              <tr><th>等級</th><th>普通</th><th>稀有</th><th>史詩</th><th>獨特</th><th>傳說</th></tr>
            </thead>
            <tbody>
              <tr><td>Lv.06</td><td>10</td><td>6</td><td>3</td><td>1</td><td>1</td></tr>
              <tr><td>Lv.11</td><td>30</td><td>10</td><td>5</td><td>2</td><td>1</td></tr>
              <tr><td>Lv.16</td><td>40</td><td>20</td><td>10</td><td>2+1</td><td>1+2</td></tr>
              <tr><td>Lv.21</td><td>60</td><td>30</td><td>15</td><td>3+2</td><td>1+4</td></tr>
              <tr><td>Lv.26</td><td>70</td><td>40</td><td>20</td><td>3+3</td><td>1+6</td></tr>
              <tr><td>Lv.31</td><td>100</td><td>50</td><td>25</td><td>4+4</td><td>1+10</td></tr>
            </tbody>
          </table>
        </div>

        <div class="admin-subheading">符文工藝 (製作) 需求粉末數</div>
        <div class="guide-table-scroll" style="max-height:none;">
          <table class="guide-table">
            <thead>
              <tr><th>普通</th><th>稀有</th><th>史詩</th><th>獨特</th><th>傳說</th></tr>
            </thead>
            <tbody>
              <tr><td>3</td><td>10</td><td>100</td><td>1,500</td><td>20,000</td></tr>
            </tbody>
          </table>
        </div>

        <div class="admin-subheading">符文拆卸取得粉末數</div>
        <div class="guide-table-scroll" style="max-height:none;">
          <table class="guide-table">
            <thead>
              <tr><th>普通</th><th>稀有</th><th>史詩</th><th>獨特</th><th>傳說</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>3</td><td>25</td><td>300</td><td>5,000</td></tr>
            </tbody>
          </table>
        </div>

        <div class="admin-note">
          ＊藍字為已驗證確認過的數值<br>
          ＊獨特及傳說升級有額外需求要小心
        </div>
      </div>

      <div class="equipped-panel">
        <div class="panel-header"><span>星座升級攻略</span></div>
        <div class="guide-table-scroll" style="max-height:560px;">
          <table class="guide-table">
            <thead>
              <tr>
                <th rowspan="2">節點</th>
                <th rowspan="2">榮譽</th>
                <th rowspan="2">巢穴LV</th>
                <th colspan="5">升級資源 (石/果/葉/晶/魂)</th>
                <th colspan="5">累計資源 (石/果/葉/晶/魂)</th>
                <th colspan="2">體力路線</th>
                <th colspan="2">攻擊路線</th>
                <th colspan="2">爆率路線 (%)</th>
                <th colspan="2">爆傷路線 (%)</th>
                <th colspan="2">建傷路線</th>
                <th colspan="2">燉菜路線</th>
              </tr>
              <tr>
                <th>石</th><th>果</th><th>葉</th><th>晶</th><th>魂</th>
                <th>石</th><th>果</th><th>葉</th><th>晶</th><th>魂</th>
                <th>增</th><th>累</th>
                <th>增</th><th>累</th>
                <th>增</th><th>累</th>
                <th>增</th><th>累</th>
                <th>增</th><th>累</th>
                <th>增</th><th>累</th>
              </tr>
            </thead>
            <tbody>${renderConstellationRows()}</tbody>
          </table>
        </div>
        <div class="admin-note">
          ＊石＝腳踏石／果＝深淵之果／葉＝天空之葉／晶＝銀河水晶／魂＝靈魂<br>
          ＊「升級資源」為該節點單次消耗量，「累計資源」為升到該節點為止的總消耗量<br>
          ＊各數值路線「增」為該節點單次增加量，「累」為累計到該節點為止的總增加量
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;
}

module.exports = (req, res) => {
  const token = getCookie(req, 'admin_session');
  const authed = verifySession(token);

  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (!authed) {
    const showError = req.query && req.query.error === '1';
    res.status(200).send(loginPageHtml(showError));
    return;
  }

  res.status(200).send(adminPageHtml());
};
