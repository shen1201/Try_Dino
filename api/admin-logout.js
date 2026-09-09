module.exports = (req, res) => {
  res.setHeader('Set-Cookie', 'admin_session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0');
  res.writeHead(302, { Location: '/admin' });
  res.end();
};
