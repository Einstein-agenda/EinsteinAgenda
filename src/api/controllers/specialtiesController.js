const models = require('../../app/models/index');

exports.getSpecialties = (req, res) => {
    models.Doctors.findAll().then(specialties => {
        res.status(200).send(specialties);
    }).catch(err => {
        res.status(400).send({ message: 'an error has occurred', err })
    })
}

exports.getDoctorsBySpecialty = (req, res) => {
    models.Schedulings.findAll({
            include:{
                model:models.Doctors,
                where:{
                    specialty: req.params.specialty,
                }
            },
    }).then(doctors => {
        res.status(200).send(doctors);
    }).catch(err => {
        res.status(400).send({ message: 'an error has occurred', err })
    })
}