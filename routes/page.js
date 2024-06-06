// 페이지 관련 라우트 파일
const express = require('express');

const router = express.Router();


router.get('/login', (req, res) => {
    res.send('여기는 로그인페이지입니다')
})

router.get('/main', (req, res) => {
    res.send('여기는 메인페이지입니다')
})


router.get('/main/group', (req, res) => {
    res.send('여기는 그룹페이지입니다')
})




module.exports = router;
