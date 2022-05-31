const userService = require('../services/userService');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await userService.login(email, password);
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
 const { body } = req;
  const token = await userService.create(body);
  return res.status(201).json({ token });
} catch (err) {
  next(err);
}
};

const getAll = async (req, res, next) => {
  try {
  const users = await userService.getAll();
  return res.status(200).json(users);
} catch (err) {
  next(err);
}
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getById(id);
    return res.status(200).json(user);
  } catch (err) {
next(err);
  }
};
module.exports = {
  login,
  create,
  getAll,
  getById,
};