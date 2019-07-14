const models = require('../../app/models/index');

exports.getPatients = (req, res) =>{
    models.Patients.findAll().then(patient =>{
        res.send(patient)
    }).catch(err=>{
        res.status(400).send({message: 'an error has occurred', err})
    })
}

exports.getPatientCredentials = (req, res) => {
    models.Patients.findOne({
        where: {
            email: req.body.email,
            password: req.body.password,
        }
    }).then(data => {
        if (data === 1) {
            res.status(200).send({ message: "OK" });
        }
        else {
            res.status(404).send({ message: "record not found" })
        }
    }).catch(err => {
        res.status(400).send({ message: 'an error has occurred', err })
    })
}

exports.getOnePatient = (req, res) => {
    models.Patients.findOne({
        where: {
            id: req.params.id
        }
    }).then(patient => {
        res.send(patient)
    }).catch(err => {
        res.status(400).send({ message: 'an error has occurred', err })
    })
}

exports.insertPatient = (req, res) => {
    const patient = req.body;
    models.Patients.build(patient).save()
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(400).send({ message: 'an error has occurred', err })
        })
}

exports.updatePatient = (req, res) => {
    const id = req.params.id;
    const patient = req.body;
    models.Patients.update(patient, {
        where: {
            id: id
        }
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(400).send({ message: 'an error has occurred', err })
    })

}

exports.deletePatient = (req, res) => {
    const id = req.params.id;
    models.Patients.destroy({
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