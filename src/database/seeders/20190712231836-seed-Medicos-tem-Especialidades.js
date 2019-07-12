'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Medicos_tem_Especialidades', [
    {
      id_medico: 1,
      id_especialidade: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_medico: 2,
      id_especialidade: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_medico: 3,
      id_especialidade: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ],{}),
    

  down: (queryInterface, Sequelize) => queryInterface.bulkInsert('Medicos_tem_Especialidades', null, {}),
};
