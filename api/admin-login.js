const crypto = require('crypto');

const SESSION_TTL_MS = 1000 * 60 * 60 * 12; // 12 小時

function timingSafeEqualStr(a, b) {
  const aBuf = Buffer.from(String(a));
  const bBuf = Buffer.from(String(b));
  if (aBuf.length !== bBuf.length) return false;
  return crypto.timingSafeEqual(aBuf, bBuf);
}

function createSessionToken() {
  const expiry = Date.now() + SESSION_TTL_MS;
  const payload = `admin:${expiry}`;
  const payloadB64 = Buffer.from(payload, 'utf8').toString('base64');
  const sig = crypto.createHmac('sha256', process.env.SESSION_SECRET).update(payloadB64).digest('hex');
  return `${payloadB64}.${sig}`;
}

module.exports = (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const adminPassword = process.env.ADMIN_PASSWORD || '';
  const sessionSecret = process.env.SESSION_SECRET || '';
  const submittedPassword = (req.body && req.body.password) || '';

  // 未設定環境變數時直接拒絕，避免空密碼比對空密碼而誤放行
  if (!adminPassword || !sessionSecret || !submittedPassword || !timingSafeEqualStr(submittedPassword, adminPassword)) {
    res.writeHead(302, { Location: '/admin?error=1' });
    res.end();
    return;
  }

  const token = createSessionToken();
  const isProd = process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production';
  const cookie = [
    `admin_session=${token}`,
    'HttpOnly',
    'SameSite=Strict',
    'Path=/',
    `Max-Age=${SESSION_TTL_MS / 1000}`,
    isProd ? 'Secure' : ''
  ].filter(Boolean).join('; ');

  res.setHeader('Set-Cookie', cookie);
  res.writeHead(302, { Location: '/admin' });
  res.end();
};
