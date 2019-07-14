'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Doctors_has_Specialties', [
    {
      id_doctor: 1,
      id_specialty: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_doctor: 2,
      id_specialty: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_doctor: 3,
      id_specialty: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ],{}),
    

  down: (queryInterface, Sequelize) => queryInterface.bulkInsert('Doctors_has_Specialties', null, {}),
};
