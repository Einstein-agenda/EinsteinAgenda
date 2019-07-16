const express = require('express');
const router = express.Router();
const specialtiesController = require('../controllers/specialtiesController');

router.get('/', (req, res)=>{
    specialtiesController.getSpecialties(req, res)
})

router.get('/:specialty', (req, res)=>{
    specialtiesController.getDoctorsBySpecialty(req, res)
})

module.exports = router;