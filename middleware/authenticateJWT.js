// JWT 인증 미들웨어 파일
const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).send('Invalid Token');
      }
      req.user = user;
      console.log(req.user);
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = authenticateJWT;
