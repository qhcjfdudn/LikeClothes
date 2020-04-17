/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CLOTHES_SPEC', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    clothes_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'CLOTHES',
        key: 'id'
      }
    },
    color: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    size: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    length: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    shoulder: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    waist: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'CLOTHES_SPEC'
  });
};