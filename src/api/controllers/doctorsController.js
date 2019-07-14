const models = require('../../app/models/index');

exports.getDoctors = (req, res) => {
    models.Doctors.findAll().then(doctors => {
        res.send(doctors)
    }).catch(err => {
        res.status(400).send({ message: 'an error has occurred', err })
    })
}

exports.insertDoctor = (req, res) => {
    const doctor = req.body;
    models.Doctors.build(doctor).save()
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(400).send({ message: 'an error has occurred', err })
        })
}

exports.updateDoctor = (req, res) => {
    const doctor = req.body;
    models.Doctors.update(doctor, {
        where: {
            id: req.query.id
        }
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(400).send({ message: 'an error has occurred', err })
    })

}