const express = require('express');
const { get, getPorId } = require('./constroladores/imoveis')

const rotas = express();
rotas.get('/imoveis',get);
rotas.get('/imoveis/:id',getPorId);

module.exports = rotas

