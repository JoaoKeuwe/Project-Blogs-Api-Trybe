const express = require('express');
const userController = require('./controllers/userController');
const errorMiddleware = require('./middlewares/errorMiddleware');
const { loginMiddleware } = require('./middlewares/loginMiddleware');

// ...

const app = express();

app.use(express.json());

app.post('/login', loginMiddleware, userController.login);
app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
