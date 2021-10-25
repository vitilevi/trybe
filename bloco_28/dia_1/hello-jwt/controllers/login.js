const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { username, password } = req.body;

  const { SECRET } = process.env;

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  }

  const payload = {
    username,
    password,
    admin: false,
  }

  if (username === 'admin' && password === 's3nh4S3gur4') payload.admin = true;
  const token = jwt.sign(payload, SECRET, jwtConfig);

  return res.status(200).json({ token });
}