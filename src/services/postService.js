const { BlogPost, User, Category } = require('../database/models');

const getAll = async () => {
    const blogPosts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'category', through: { attributes: [] } },
      ] });
    return blogPosts;
  };

module.exports = { getAll };
