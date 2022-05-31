const jwt = require('jsonwebtoken');
const error = require('../utils/errorMessage');

const validationToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const validToken = jwt.verify(authorization, process.env.JWT_SECRET);
    req.user = validToken;
    next();
  } catch (err) {
    next(error(401, 'Expired or invalid token'));
  }
};
module.exports = validationToken;
