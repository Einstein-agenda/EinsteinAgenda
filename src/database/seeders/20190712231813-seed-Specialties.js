'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Specialties', [
    {
      specialty: 'Obstetra',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      specialty: 'Pediatra',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      specialty: 'Nutrólogo',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],{}),
    

  down: (queryInterface, Sequelize) => queryInterface.bulkInsert('Specialties', null, {}),
};
