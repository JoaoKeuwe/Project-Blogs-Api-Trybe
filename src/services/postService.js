const { BlogPost, User, Category } = require('../database/models');

const getAll = async (id) => {
    const blogPosts = await BlogPost.findAll({
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ] });
    return blogPosts;
  };

module.exports = { getAll };
