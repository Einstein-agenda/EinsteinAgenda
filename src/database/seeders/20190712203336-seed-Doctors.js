'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Doctors', [
    {
      name: 'Roberto',
      crm: '12365478/SP',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Juliana',
      crm: '45321/SP',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Marisa',
      crm: '18743654/SP',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],{}),
    

  down: (queryInterface, Sequelize) => queryInterface.bulkInsert('Doctors', null, {}),
};
  
