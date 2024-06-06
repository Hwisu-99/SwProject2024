const Sequelize = require('sequelize');

module.exports = class Lecture extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      credit: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      lectureNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
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
    db.Lecture.hasMany(db.Time, {
      foreignKey: { name: "lecture_id", allowNull: false }, sourceKey: 'id', onDelete: "cascade", onUpdate: "cascade",
    });
    db.Lecture.hasMany(db.Group, {
      foreignKey: { name: "lecture_id", allowNull: false }, sourceKey: 'id', onDelete: "cascade", onUpdate: "cascade",
    });
    db.Lecture.belongsTo(db.Professor, {
      foreignKey: { name: "professor_id", allowNull: false }, sourceKey: 'id', onDelete: "cascade", onUpdate: "cascade",
    });
    db.Lecture.belongsTo(db.Major, {
      foreignKey: { name: "major_id", allowNull: false }, sourceKey: 'id', onDelete: "cascade", onUpdate: "cascade",
    });
    db.Lecture.belongsToMany(db.Student, { through: 'Student-Lecture' });
  }
};
