const { User } = require('../database/models');
const error = require('../utils/errorMessage');
const generateToken = require('../utils/generateJWT');

const login = async (email, password) => {
    const user = await User.findOne(
        { where: { email, password }, attributes: { exclude: ['password'] } },
);
    if (!user) {
        throw error(400, 'Invalid fields');
    }
    const token = generateToken(user);
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

const getAll = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
};

const getById = async (id) => {
    const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    if (!user) {
        throw error(404, 'User does not exist');
    }
    return user;
};

module.exports = {
    login,
    create,
    getAll,
    getById,
};