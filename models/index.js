const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
// [env] can be ['development'], ['test'], or ['production']
const config = require('../config/config')[env];

const Group = require('./group');
const Lecture = require('./lecture');
const Major = require('./major');
const Meeting = require('./meeting');
const Professor = require('./professor');
const Student = require('./student');
const Time = require('./time');

const db = {};
// input DB info into sequelize
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);



// input DB properties
db.sequelize = sequelize;
db.Group = Group;
db.Lecture = Lecture;
db.Major = Major;
db.Meeting = Meeting;
db.Professor = Professor;
db.Student = Student;
db.Time = Time;

// init db 
Group.init(sequelize);
Lecture.init(sequelize);
Major.init(sequelize);
Meeting.init(sequelize);
Professor.init(sequelize);
Student.init(sequelize);
Time.init(sequelize);

// associate db
Group.associate(db);
Lecture.associate(db);
Major.associate(db);
Meeting.associate(db);
Professor.associate(db);
Student.associate(db);
Time.associate(db);

module.exports = db;
