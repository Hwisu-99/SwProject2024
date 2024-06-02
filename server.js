// 서버 초기화 및 설정 파일 
const express = require('express');
const bodyParser = require('body-parser');


// 라우팅
const pageRoutes = require('./routes/pageRoutes.js');
const authRoutes = require('./routes/authRoutes.js');
const groupRoutes = require('./routes/groupRoutes');
const meetingRoutes = require('./routes/meetingRoutes');


const dotenv = require('dotenv');
const db = require('./config/db');

dotenv.config();  

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));  // url에 한글이 포함되는 경우를 대비 

app.use('/', pageRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/meetings', meetingRoutes);


const PORT = process.env.PORT; // .env 파일에서 불러오기 

app.listen(PORT, () => {
  console.log(`서버가 포트${PORT}에서 진행중`);
});
