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
      timestamps: true,
      underscored: false,
      modelName: 'Time',
      tableName: 'times',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Time.belongsTo(db.Lecture);
  }
};
