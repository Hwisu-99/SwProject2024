// 페이지 관련 라우트 파일
const express = require('express');

const router = express.Router();

// GET : http://localhost:3000/ : 로그인 페이지(default page) 가져옴
router.get('/', (req, res) => {
    res.send('여기는 로그인페이지입니다')
})

// GET : http://localhost:3000/main : 메인페이지 가져옴
router.get('/main', (req, res) => {
    res.send('여기는 메인페이지입니다')
})
 

// GET : http://localhost:3000/main/group : 그룹페이지 가져옴
router.get('/main/group', (req, res) => {
    res.send('여기는 그룹페이지입니다')
})
 
 


module.exports = router;
