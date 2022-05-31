const express = require('express');
const userController = require('./controllers/userController');
const errorMiddleware = require('./middlewares/errorMiddleware');
const { loginMiddleware } = require('./middlewares/loginMiddleware');
const categoriesController = require('./controllers/categoriesController');
const 
{
    displayNameValidation,
    passwordValidation,
    emailValidation, 
} = require('./middlewares/userMiddleware');

const validationToken = require('./middlewares/validationToken');

// ...

const app = express();

app.use(express.json());

app.post('/login', loginMiddleware, userController.login);
app.post('/user',
displayNameValidation,
passwordValidation,
emailValidation,
userController.create);

app.get('/user', validationToken, userController.getAll);
app.get('/user/:id', validationToken, userController.getById);
app.post('/categories', validationToken, categoriesController.addCategory);

app.use(errorMiddleware);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
