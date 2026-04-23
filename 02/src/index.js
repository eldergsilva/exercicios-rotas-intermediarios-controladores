const express = require('express');
const rotas = require('./roteador');

const app = express();

app.use(rotas)
const PORT =8000
app.listen(PORT);