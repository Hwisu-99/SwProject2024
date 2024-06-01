// 로그인 인증을 처리하는 컨트롤러 파일 
const User = require('../models/User');
const { generateToken } = require('../utils/jwt');

const login = (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email, (err, user) => {
    if (err || !user) {
      return res.status(401).send('해당 이메일을 갖는 사용자는 존재하지 않습니다');
    }

    if (user.password === password) {
      const token = generateToken(user);
      res.json({ token });
    } else {
      res.status(401).send('잘못된 비밀번호입니다');
    }
  });
};

module.exports = { login };
