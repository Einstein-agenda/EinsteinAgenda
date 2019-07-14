const models = require('../../app/models/index');

exports.getDoctors = (req, res) => {
    models.Doctors.findAll().then(doctors => {
        res.send(doctors)
    }).catch(err => {
        res.status(400).send({ message: 'an error has occurred', err })
    })
}

exports.getOneDoctor = (req, res) => {
    models.Doctors.findOne({
        where: {
            id: req.params.id
        }
    }).then(doctor => {
        res.send(doctor)
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
            id: req.body.id
        }
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(400).send({ message: 'an error has occurred', err })
    })

}

exports.deleteDoctor = (req, res) => {
    const doctor = req.body;
    models.Doctors.destroy({
        where: {
            id: doctor.id
        }
    }).then(data => {
        if (data === 1) {
            res.status(200).send({ message: "Deleted successfully" });
        }
        else {
            res.status(404).send({ message: "record not found" })
        }
    }).catch(err => {
        res.status(400).send({ message: "an error has occurred", err })
    })

}