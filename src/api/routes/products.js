const express = require('express');
const router = express.Router();
const doctorsController = require('../controllers/doctorsController');


router.get('/', (req, res)=>{
    doctorsController.getDoctors(req, res)
})

router.post('/', (req, res)=>{
    doctorsController.insertDoctor(req, res)
})

router.post('/update', (req, res)=>{
    doctorsController.updateDoctor(req, res)
})

router.get('/products', (req, res, next)=>{
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next)=>{
    const product = {
        name: req.body.name,
        price: req.body.price,
    }
    res.status(201).json({
        message: 'Handling POST requests to /products',
        createdProduct: product
    });
});

router.get('/:productId', (req, res, next)=>{
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: 'AHÁ!',
            id: id
        })
    } else{
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:productId', (req, res, next)=>{
    res.status(200).json({
        message: 'Updated :)',
    })
});

router.delete('/:productId', (req, res, next)=>{
    res.status(200).json({
        message: 'Deleted :)',
    })
});

module.exports = router;

