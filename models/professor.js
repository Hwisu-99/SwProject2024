const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      eclassID: {
        type: Sequelize.STRING(40),
        allowNull: true,
        unique: true,
      },
      eclassPW: {
        type: Sequelize.STRING(40),
        allowNull: true,
        unique: true,
      },
      name: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Professor',
      tableName: 'professors',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Professor.hasMany(db.Group, {
      foreignKey: { name: "professor_id", allowNull: false }, sourceKey: 'id', onDelete: "cascade", onUpdate: "cascade",
    });
    db.Professor.hasMany(db.Lecture, {
      foreignKey: { name: "professor_id", allowNull: true }, sourceKey: 'id', onDelete: "cascade", onUpdate: "cascade",
    });
    db.Professor.belongsTo(db.Major, {
      foreignKey: { name: "major_id", allowNull: false }, sourceKey: 'id', onDelete: "cascade", onUpdate: "cascade",
    });
  }
};
