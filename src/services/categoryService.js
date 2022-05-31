const { Category } = require('../database/models');
const error = require('../utils/errorMessage');

const addCategory = async (name) => {
    if (!name) {
        throw error(400, '"name" is required');
    }
  const category = await Category.create({ name }); 
  return category;  
};

module.exports = { addCategory };