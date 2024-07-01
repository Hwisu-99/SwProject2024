const Sequelize = require('sequelize');

module.exports = class Meeting extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      link: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Meeting',
      tableName: 'meetings',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Meeting.belongsTo(db.Group, {
      foreignKey: { name: "group_id", allowNull: false }, sourceKey: 'id'
    });
  }
};