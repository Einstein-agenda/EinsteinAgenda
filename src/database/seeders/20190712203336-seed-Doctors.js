'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Doctors', [
    {
      name: 'Roberto',
      crm: '12365478/SP',
      email: 'roberto@gmail.com',
      password: '147852',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Juliana',
      crm: '45321/SP',
      email: 'juliana@gmail.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Marisa',
      crm: '18743654/SP',
      email: 'marisa@gmail.com',
      password: '0000',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],{}),
    

  down: (queryInterface, Sequelize) => queryInterface.bulkInsert('Doctors', null, {}),
};
  
