const express = require('express');
const router = express.Router();
const schedulingController = require('../controllers/schedulingsController');


router.get('/', (req, res)=>{
    schedulingController.getSchedulings(req, res)
})

router.get('/:id', (req, res)=>{
    schedulingController.getOneScheduling(req, res)
})

router.post('/', (req, res)=>{
    schedulingController.insertScheduling(req, res)
})

router.put('/:id', (req, res)=>{
    schedulingController.updateScheduling(req, res)
})

router.delete('/:id', (req, res)=>{
    schedulingController.deleteScheduling(req, res)
})

module.exports = router;

