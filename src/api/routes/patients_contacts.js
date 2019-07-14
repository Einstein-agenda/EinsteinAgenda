const express = require('express');
const router = express.Router();
const patientsContactsController = require('../controllers/patientsContactsController');


router.get('/', (req, res)=>{
    patientsContactsController.getDoctors(req, res)
})

router.get('/:id', (req, res)=>{
    patientsContactsController.getOneDoctor(req, res)
})

router.post('/', (req, res)=>{
    patientsContactsController.insertDoctor(req, res)
})

router.put('/:id', (req, res)=>{
    patientsContactsController.updateDoctor(req, res)
})

router.delete('/:id', (req, res)=>{
    patientsContactsController.deleteDoctor(req, res)
})

module.exports = router;

