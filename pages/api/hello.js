// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const authorization = req.headers['authorization'];
  console.log(authorization);
  if (!authorization || authorization !== 'Bearer token_xxx') {
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Bearer');
    res.end('Unauthorized');
    return;
  }

  res.status(200).json({ name: 'John Doe' });
}
