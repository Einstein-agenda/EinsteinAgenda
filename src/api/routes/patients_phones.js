const express = require('express');
const router = express.Router();
const patientsContactsController = require('../controllers/patientsPhonesController');


router.get('/', (req, res)=>{
    patientsPhonesController.getDoctors(req, res)
})

router.get('/:id', (req, res)=>{
    patientsPhonesController.getOneDoctor(req, res)
})

router.post('/', (req, res)=>{
    patientsPhonesController.insertDoctor(req, res)
})

router.put('/:id', (req, res)=>{
    patientsPhonesController.updateDoctor(req, res)
})

router.delete('/:id', (req, res)=>{
    patientsPhonesController.deleteDoctor(req, res)
})

module.exports = router;

