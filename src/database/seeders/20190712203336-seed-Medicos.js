'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Medicos', [
    {
      nome: 'Roberto',
      crm: '12365478/SP',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Juliana',
      crm: '45321/SP',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Marisa',
      crm: '18743654/SP',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],{}),
    

  down: (queryInterface, Sequelize) => queryInterface.bulkInsert('Medicos', null, {}),
};
  
