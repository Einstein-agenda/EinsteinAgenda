const express = require('express');
const router = express.Router();
const schedulingController = require('../controllers/schedulingsController');


router.get('/', (req, res)=>{
    schedulingController.getSchedulings(req, res)
})

router.get('/medico/:id_doctor', (req, res)=>{
    schedulingController.getSchedulingsByDoctorPatinentNull(req, res)
})

router.get('/medico/consultas/:id_doctor', (req, res)=>{
    schedulingController.getSchedulingsByDoctor(req, res)
})

router.get('/paciente/:id_patient', (req, res)=>{
    schedulingController.getSchedulingsByPatient(req, res)
})

router.post('/', (req, res)=>{
    schedulingController.insertScheduling(req, res)
})

router.put('/:id', (req, res)=>{
    schedulingController.updateScheduling(req, res)
})

router.delete('/apagar/:id', (req, res)=>{
    schedulingController.deleteScheduling(req, res)
})

module.exports = router;

