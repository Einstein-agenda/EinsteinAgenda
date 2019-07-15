const models = require('../../app/models/index');

exports.getSchedulings = (req, res) => {
    models.Schedulings.findAll({
        where:{
            id_patient: null
        },
        include:[
            {
                model:models.Doctors,

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

exports.getSchedulingsByUser = (req, res) => {
    models.Schedulings.findAll({
        where: {
            id_patient: req.params.id_patient
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
    const id = req.params.id;
    const scheduling = req.body;
    models.Schedulings.update(scheduling, {
        where: {
            id: id
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