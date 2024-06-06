// 로그인 인증을 처리하는 컨트롤러 파일 
const { Student } = require('../models');
const { generateToken } = require('../utils/jwt');

const login = async (req, res) => {
  const { id, password } = req.body;
  console.log("입력한 ID: ", id);
  console.log("입력한 PassWord: ", password);

  try {
    // id를 사용하여 데이터베이스에서 사용자 찾기
    const user = await Student.findOne({ where: { eclassID: id } });
    // 사용자가 있는지 확인 
    if (!user) {
      return res.status(401).send('해당 아이디를 갖는 사용자는 존재하지 않습니다');
    }
    // 비밀번호가 일치하는지 확인
    if (user.eclassPW === password) {
      // 토큰 생성
      const token = generateToken(user);
      res.json({ message: '로그인 성공', token });

    } else {
      res.status(402).send('잘못된 비밀번호입니다');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('서버 오류');
  }
};

const logout = async (req, res) => {
  try {
    // 클라이언트 측에서 토큰을 삭제하도록 응답
    res.json({ message: '로그아웃 성공' });
  } catch (err) {
    console.error(err);
    res.status(500).send('서버 오류');
  }
};


module.exports = { login, logout};
