const express = require('express');
const app = express();
app.use(express.json())
const imoveis = require('./dados/imoveis')

const { get, getPorId }=require('./constroladores/imoveis')


app.get('/imoveis',get);
app.get('/imoveis/:id',getPorId);




app.listen(8000);

