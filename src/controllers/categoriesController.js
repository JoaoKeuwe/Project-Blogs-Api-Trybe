const categoryService = require('../services/categoryService');

const addCategory = async (req, res, next) => {
  try {
      const { name } = req.body;
    const category = await categoryService.addCategory(name);
    return res.status(201).json(category);
  } catch (err) {
    next(err);
  }
};
module.exports = { addCategory };
