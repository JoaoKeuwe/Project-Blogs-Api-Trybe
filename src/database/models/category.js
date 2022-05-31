'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category",{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false }
  }, {
    timestamps: false
  });
  return Category;
};