const express = require('express');
const { vezJogar, consultar, remover, adicionar } = require('./controladores/rodadas');

const rotas = express();

rotas.get("/", vezJogar);
rotas.get("/consultar", vezJogar);
rotas.get("/remover", vezJogar);
rotas.get("/adicionar", vezJogar);
 


module.exports = rotas;