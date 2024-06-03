/* TODO
<Hwisu>
<Junseo>
<Common>
*/

const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');

dotenv.config();

const bodyParser = require('body-parser');
const pageRouter = require('./routes/page');
const authRouter = require('./routes/auth');
const groupRouter = require('./routes/group');
const meetingRouter = require('./routes/meeting');

const { swaggerUi, swaggerSpec } = require('./swagger');
const { sequelize } = require("./models");

const app = express();
app.set('port', process.env.PORT || 8001);

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/page', pageRouter);
app.use('/auth', authRouter);
app.use('/groups', groupRouter);
app.use('/meetings', meetingRouter);

// force: true -> re-create new table whenever ERD is chenaged. 
sequelize.sync({ force: true })
  .then(() => {
    console.log('DB connecdtion success');
  })
  .catch((err) => {
    console.error(err);
  });

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

app.listen(app.get('port'), () => {
  console.log('Waiting at PORT : ', app.get('port'));
});

