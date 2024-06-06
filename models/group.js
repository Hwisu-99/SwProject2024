const Sequelize = require('sequelize');

module.exports = class Group extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Group',
      tableName: 'groups',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Group.belongsToMany(db.Student, { through: 'Student-Group' });
    db.Group.belongsTo(db.Professor, {
      foreignKey: { name: "professor_id", allowNull: false }, sourceKey: 'id'
    });
    db.Group.belongsTo(db.Lecture, {
      foreignKey: { name: "lecture_id", allowNull: false }, sourceKey: 'id'
    });
  }
};
