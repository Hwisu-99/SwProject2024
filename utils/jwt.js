const jwt = require('jsonwebtoken');

// 토큰 생성
const generateToken = (user) => {
<<<<<<< HEAD
  // 토큰의 헤드를 사용자의 이름과 아이디로 구성 
  return jwt.sign(
    {name: user.name, eclassID: user.eclassID}, 
    process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
=======
  // req.user의 구조 결정하는 부분 -> user table의 id, email name, 나중에 user가 속한 groupId 추가 
  return jwt.sign(
    { 
      id: user.id, 
      email: user.email, 
      name: user.name, 
      user_group_id: user.user_group_id 
    }, 
    process.env.JWT_SECRET, 
    { expiresIn: '1h',}
  );
>>>>>>> new-origin/main
};

// 토큰 검사
const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { generateToken, verifyToken };
