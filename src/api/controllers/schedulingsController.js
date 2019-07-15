const models = require('../../app/models/index');

exports.getSchedulings = (req, res) => {
    models.Schedulings.findAll({
        where: {

        },
        include: [
            {
                model: models.Doctors,

            }
        ]
    }).then(scheduling => {

        res.send(scheduling)
    }).catch(err => {
        res.status(400).send({ message: 'an error has occurred', err })
    })
}

exports.getSchedulingsBySpecialty = (req, res) => {
    models.Schedulings.findAll({
        where: {
            specialty: req.params.Doctor.specialty
        },
        include: [
            {
                model: models.Doctors,

            }
        ]
    }).then(scheduling => {

        res.send(scheduling)
    }).catch(err => {
        res.status(400).send({ message: 'an error has occurred', err })
    })
}

exports.getOneScheduling = (req, res) => {
    models.Schedulings.findOne({
        where: {
            id: req.params.id
        }
    }).then(scheduling => {
        res.send(scheduling)
    }).catch(err => {
        res.status(400).send({ message: 'an error has occurred', err })
    })
}

exports.getSchedulingsByPatient = (req, res) => {
    models.Schedulings.findAll({
        where: {
            id_patient: req.params.id_patient
        }, include: [
            {
                model: models.Doctors,

            }
        ]
    }).then(scheduling => {
        res.send(scheduling)
    }).catch(err => {
        res.status(400).send({ message: 'an error has occurred', err })
    })
}
exports.getSchedulingsByDoctor = (req, res) => {
    const { Op } = Sequelize.Op;
    models.Schedulings.findAll({
        where: {
            id_doctor: req.params.id_doctor,
            id_patient: {
                [Op.ne]: null
            }
        }, include: {
            model: models.Patients
        }
    }).then(scheduling => {
        res.send(scheduling)
    }).catch(err => {
        res.status(400).send({ message: 'an error has occurred', err })
    })
}

exports.insertScheduling = (req, res) => {
    const scheduling = req.body;
    models.Schedulings.build(scheduling).save()
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(400).send({ message: 'an error has occurred', err })
        })
}

exports.updateScheduling = (req, res) => {
    const scheduling = req.body;
    models.Schedulings.update(scheduling, {
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(400).send({ message: 'an error has occurred', err })
    })

}

exports.deleteScheduling = (req, res) => {
    const id = req.params.id;
    models.Schedulings.destroy({
        where: {
            id: id
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