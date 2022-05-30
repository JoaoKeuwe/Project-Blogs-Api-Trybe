'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define("Category",{
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};