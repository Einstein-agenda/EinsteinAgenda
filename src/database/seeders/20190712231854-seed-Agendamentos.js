'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Agendamentos', [
    {
      data: '2019-10-25',
      hora: '10:00:00',
      id_paciente: 1,
      id_medico: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      data: '2019-08-08',
      hora: '08:00:00',
      id_paciente: 2,
      id_medico: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      data: '2019-07-31',
      hora: '14:00:00',
      id_paciente: 3,
      id_medico: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ],{}),
    

  down: (queryInterface, Sequelize) => queryInterface.bulkInsert('Agendamentos', null, {}),
};