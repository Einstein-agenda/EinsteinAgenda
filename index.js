
const express = require('express');
const { Medicos } = require('./src/app/models');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}))

//Medicos.create({name: 'Roberto', crm:'123456/SP'});

app.get('/', (req, res) => {
    
  res.send('Hello World!');
});

app.listen(3000);
