const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'API Agenda Teste Albert Einstein'
    });
});

module.exports = router;