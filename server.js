// 서버 초기화 및 설정 파일 
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
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
  console.log(`Server running on port ${PORT}`);
});
