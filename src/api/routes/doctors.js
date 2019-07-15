const express = require('express');
const router = express.Router();
const doctorsController = require('../controllers/doctorsController');


router.get('/', (req, res)=>{
    doctorsController.getDoctors(req, res)
})

router.get('/:id', (req, res)=>{
    doctorsController.getOneDoctor(req, res)
})



router.post('/', (req, res)=>{
    doctorsController.insertDoctor(req, res)
})

router.put('/:id', (req, res)=>{
    doctorsController.updateDoctor(req, res)
})

router.delete('/:id', (req, res)=>{
    doctorsController.deleteDoctor(req, res)
})

module.exports = router;

