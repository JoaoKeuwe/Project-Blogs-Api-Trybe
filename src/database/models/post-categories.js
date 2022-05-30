'use strict';

module.exports = (sequelize, DataTypes) => {

  const PostCategories = sequelize.define("PostCategories",{
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PostCategories',
  });
  return PostCategories;
};