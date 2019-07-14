const models = require('../../app/models/index');

exports.getDoctors = (req, res) =>{
    models.Doctors.findAll().then(doctors =>{
        res.send(doctors)
    }).catch(err=>{
        res.status(400).send({message: 'an error has occurred', err})
    })
}