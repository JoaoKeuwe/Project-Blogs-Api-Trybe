const postService = require('../services/postService');

const getAll = async (req, res) => {
  const blogPosts = await postService.getAll();
  return res.status(200).json(blogPosts);
};

  module.exports = { getAll };