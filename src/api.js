const express = require('express');
const userController = require('./controllers/userController');
const errorMiddleware = require('./middlewares/errorMiddleware');
const { loginMiddleware } = require('./middlewares/loginMiddleware');
const {
    displayNameValidation,
    passwordValidation,
    emailValidation,
    } = require('./middlewares/userMiddleware');

// ...

const app = express();

app.use(express.json());

app.post('/login', loginMiddleware, userController.login);
app.post('/user',
displayNameValidation,
passwordValidation,
emailValidation,
userController.create);

app.use(errorMiddleware);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
