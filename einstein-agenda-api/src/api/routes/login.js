const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientsController');
const doctorsController = require('../controllers/doctorsController');

router.post('/pacienteLogin', (req, res)=>{
    patientController.getPatientCredentials(req, res)
})

router.post('/medicoLogin', (req, res)=>{
    doctorsController.getDoctorCredentials(req, res)
})

module.exports = router;