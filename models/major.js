const Sequelize = require('sequelize');

module.exports = class Major extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      department: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Major',
      tableName: 'majors',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Major.hasMany(db.Student, {
      foreignKey: { name: "major_id", allowNull: false }, sourceKey: 'id', onDelete: "cascade", onUpdate: "cascade",
    });
    db.Major.hasMany(db.Lecture, {
      foreignKey: { name: "major_id", allowNull: false }, sourceKey: 'id', onDelete: "cascade", onUpdate: "cascade",
    });
    db.Major.hasMany(db.Professor, {
      foreignKey: { name: "major_id", allowNull: false }, sourceKey: 'id', onDelete: "cascade", onUpdate: "cascade",
    });
  }
};
