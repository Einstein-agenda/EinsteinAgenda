'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Schedulings', [
    {
      date: '2019-10-25',
      time: '10:00:00',
      id_patient: null,
      id_doctor: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date: '2019-08-08',
      time: '08:00:00',
      id_patient: 2,
      id_doctor: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date: '2019-07-31',
      time: '14:00:00',
      id_patient: null,
      id_doctor: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ],{}),
    

  down: (queryInterface, Sequelize) => queryInterface.bulkInsert('Schedulings', null, {}),
};