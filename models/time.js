const Sequelize = require('sequelize');

module.exports = class Time extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      startTime: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      endTime: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dayOfWeek: {
        type: Sequelize.STRING(10),
        allowNull: false,
      }
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Time',
      tableName: 'times',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    // db.Time.belongsTo(db.Lecture);
    db.Time.belongsTo(db.Lecture, {
      foreignKey: { name: "lecture_id", allowNull: false }, sourceKey: 'id'
    });
  }
};
