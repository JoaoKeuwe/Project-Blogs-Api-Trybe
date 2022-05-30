const { User } = require('../database/models');
const error = require('../utils/errorMessage');
const generateToken = require('../utils/generateJWT');

const login = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw error(400, 'Invalid fields');
    }
    const token = generateToken({ email, password });
    return token;
};

module.exports = { login };