const models = require('../../app/models/index');

exports.getSpecialties = (req, res) => {
    models.Specialties.findAll().then(specialties => {
        res.status(200).send(specialties);
    }).catch(err => {
        res.status(400).send({ message: 'an error has occurred', err })
    })
}

exports.getDoctorsBySpecialty = (req, res) => {
    models.Specialties.findAll({
        where:{
           id_specialty: req.params.id_specialty,
           include:{
               model:models.Doctors
           } 
        }
    }).then(doctors => {
        res.status(200).send(doctors);
    }).catch(err => {
        res.status(400).send({ message: 'an error has occurred', err })
    })
}