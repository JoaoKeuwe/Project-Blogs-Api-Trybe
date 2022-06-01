const postService = require('../services/postService');

const getAll = async (req, res, next) => {
  console.log(req.user);
  const { id } = req.user.data;
  try {
 const blogPosts = await postService.getAll(id);
  return res.status(200).json(blogPosts);
} catch (err) {
  next(err);
}
};

  module.exports = { getAll };