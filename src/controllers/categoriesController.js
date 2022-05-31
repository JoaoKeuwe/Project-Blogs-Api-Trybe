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

const listAll = async (req, res, next) => {
  try {
    const list = await categoryService.listAll();
    return res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
module.exports = { addCategory, listAll };
