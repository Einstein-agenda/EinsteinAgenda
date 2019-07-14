const models = require('../../app/models/index');

exports.getPatients = (req, res) =>{
    models.Patients.findAll().then(patient =>{
        res.send(patient)
    }).catch(err=>{
        res.status(400).send({message: 'an error has occurred', err})
    })
}