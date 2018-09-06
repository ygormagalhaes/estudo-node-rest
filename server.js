const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = 8080;

app.listen(PORT);
console.log(`Servidor HTTP iniciado. Porta: ${PORT}`);

const helloRouter = require('./routes/hello');
app.use('/hello', helloRouter);

const apiRouter = require('./routes/api');
app.use('/api', apiRouter);