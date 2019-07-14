const models = require("../../app/models/index");

exports.getDoctors = (req, res) => {
  models.Medicos.findAll({
    // where: {
    //   nome: "Marisa"
    // },
    // attributes: ["nome", "crm"],
    // include: [
    //     {
    //         model: models.especialidades, required: false,
    //         where: {

    //         }
    //     }
    // ]
  })
    .then(doctors => {
      res.send(doctors);
    })
    .catch(err => {
      res.status(400).send({ message: "an error has occurred", err });
    });

//   models.Medicos.build({
//     nome: "Marcelo",
//     crm: "12234/RJ"
//   }).save();

//   models.Medicos.update(
//     {
//         nome: "Marisa Monte"
//     },
//     {
//         where: {
//             nome: "Marisa"
//         }
//     }
//   );
};
