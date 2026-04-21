const express = require('express');
const rotas = require('./roteador')
const app = express();

app.use(rotas) ;


const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
