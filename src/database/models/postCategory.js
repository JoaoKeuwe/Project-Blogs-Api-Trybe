"use strict";

const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    "PostCategory",
    {
      postId: {
        type: DataTypes.INTEGER,
        references: {
          model: "BlogPosts", // referenciando  a tabela Blog Posts da  coluna id
          key: "id",
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Categories", // referenciando  a tabela category id da  coluna id
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: "postId",
      otherKey: "categoryId",
      as: "category",
      through: PostCategory,
    });

    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: "categoryId",
      otherKey: "postId",
      as: "post",
      through: PostCategory,
    }); // associando tebelas blog post e category
  };

  return PostCategory;
};

module.exports = PostCategory;
