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
        <div class="panel-header"><span>管理員後台</span></div>
        <div style="padding:8px; color:#a0a0b0; font-size:13px;">內容製作中，之後可以在這裡加入需要的管理功能。</div>
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
