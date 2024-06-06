const Sequelize = require('sequelize');

module.exports = class Lecture extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      credit: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      lectureNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Lecture',
      tableName: 'lectures',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Lecture.hasMany(db.Time);
    db.Lecture.hasMany(db.Group);
    db.Lecture.belongsTo(db.Professor);
    db.Lecture.belongsTo(db.Major);
    db.Lecture.belongsToMany(db.Student, { through: 'Student-Lecture' });
  }
};
