const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientsController');


router.get('/', (req, res)=>{
    patientController.getPatients(req, res)
})

router.get('/:id', (req, res)=>{
    patientController.getOnePatient(req, res)
})

router.post('/', (req, res)=>{
    patientController.insertPatient(req, res)
})

router.put('/:id', (req, res)=>{
    patientController.updatePatient(req, res)
})

router.delete('/:id', (req, res)=>{
    patientController.deletePatient(req, res)
})

module.exports = router;

