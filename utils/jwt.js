const jwt = require('jsonwebtoken');

// 토큰 생성
const generateToken = (user) => {
  // 토큰의 헤드를 사용자의 이름과 아이디로 구성 
  return jwt.sign(
    {name: user.name, eclassID: user.eclassID}, 
    process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

// 토큰 검사
const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { generateToken, verifyToken };
