'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Especialidades', [
    {
      nome: 'Obstetra',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Pediatra',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Nutrólogo',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],{}),
    

  down: (queryInterface, Sequelize) => queryInterface.bulkInsert('Especialidades', null, {}),
};
