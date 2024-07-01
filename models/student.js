const Sequelize = require('sequelize');


module.exports = class Student extends Sequelize.Model {
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
        unique: false,
      },
      name: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Student',
      tableName: 'students',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Student.belongsTo(db.Major, {
      foreignKey: { name: "major_id", allowNull: false }, sourceKey: 'id', onDelete: "cascade", onUpdate: "cascade",
    });
    db.Student.belongsToMany(db.Lecture, { through: 'Student-Lecture' });
    db.Student.belongsToMany(db.Group, { through: 'Student-Group' });
  }

};
