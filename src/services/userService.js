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
const create = async (newUser) => {
    const { email, displayName, image, password } = newUser;
    const user = await User.findOne({ where: { email } });
    if (user) {
        console.log('chegou');
       throw error(409, 'User already registered');
    }
   await User.create({ email, password, displayName, image });
    const token = generateToken({ email, displayName, image });
    return token;
};

module.exports = { login, create };