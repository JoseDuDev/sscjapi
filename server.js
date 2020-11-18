var express = require('express');
var app = express()
var bodyParser = require("body-parser")
var cors = require('cors')
var fs = require('fs');

require('dotenv').config()

app.use(bodyParser.json({
    limit: '50mb',
    extended: true,
    type: '*/*'
}))
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}))
app.use(cors());
/*app.use(cors({
  credentials: true,
  origin: ['http://localhost:8080']
}))*/

var content = require('./api');
content(app, fs);

const porta = process.env.PORT || 87;
app.listen(porta, () => {
    console.log(`Rodando a porta ${porta}`)
});