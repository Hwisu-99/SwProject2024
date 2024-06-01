// 서버 초기화 및 설정 파일 
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes.js');
const groupRoutes = require('./routes/groupRoutes');
const meetingRoutes = require('./routes/meetingRoutes');
const dotenv = require('dotenv');
const db = require('./config/db');

dotenv.config();  

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/meetings', meetingRoutes);

const PORT = process.env.PORT; // .env 파일에서 불러오기 

app.listen(PORT, () => {
  console.log(`서버가 포트${PORT}에서 진행중`);
});



app.get('/', (req, res) => {
  res.send('여기는 로그인 페이지입니다');
}) 

app.get('/main', (req, res) => {
  res.send('여기는 메인 페이지입니다');
}) 

app.get('/main/group', (req, res) => {
  res.send('여기는 그룹 페이지입니다');
}) 