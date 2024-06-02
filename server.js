/* TODO
<Hwisu>
<Junseo>
<Common>
- add meetings DB in erdcloud
*/

// 서버 초기화 및 설정 파일 
const express = require('express');
const bodyParser = require('body-parser');
const pageRoutes = require('./routes/pageRoutes.js');
const authRoutes = require('./routes/authRoutes.js');
const groupRoutes = require('./routes/groupRoutes');
const meetingRoutes = require('./routes/meetingRoutes');


const dotenv = require('dotenv');
// const db = require('./config/db');

const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

dotenv.config();

const { swaggerUi, swaggerSpec } = require('./swagger');
const { sequelize } = require("./models");

const app = express();

console.log("after require")

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/page', pageRoutes);
app.use('/auth', authRoutes);
app.use('/groups', groupRoutes);
app.use('/meetings', meetingRoutes);

// const PORT = process.env.PORT; // .env 파일에서 불러오기 
app.set('port', process.env.PORT);

console.log("before DB")

// force: true -> re-create new table whenever ERD is chenaged. 
sequelize.sync({ force: true })
  .then(() => {
    console.log('DB connecdtion success');
  })
  .catch((err) => {
    console.error(err);
  });

console.log("After DB")


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// error handler
app.use((req, res, next) => {
  const error = new Error(`Do not have ${req.method} ${req.url} router.`);
  error.status = 404;
  next(error);
});
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
});


// app.listen(PORT, () => {
//   console.log(`서버가 포트${PORT}에서 진행중`);
// });
app.listen(app.get('port'), () => {
  console.log('Waiting at PORT : ', app.get('port'));
});

