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

module.exports = {
  login,
  create,
};