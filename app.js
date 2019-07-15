const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const doctorRoutes = require('./src/api/routes/doctors');
const patientRoutes = require('./src/api/routes/patients');
const loginRoutes = require('./src/api/routes/login');
const schedulingRoutes = require('./src/api/routes/schedulings');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
 
app.use('/', loginRoutes); 
app.use('/medicos', doctorRoutes);
app.use('/pacientes', patientRoutes);
app.use('/agendamentos', schedulingRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});


module.exports = app;