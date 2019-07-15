'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Doctors', [
    {
      name: 'Roberto de Lima',
      crm: '12365478/SP',
      specialty: 'Ortopedista',
      email: 'roberto@gmail.com',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Juliana Pereira',
      crm: '45321/SP',
      specialty: 'Clínico Geral',
      email: 'juliana@gmail.com',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Marisa Montebranco',
      crm: '18743654/SP',
      specialty: 'Pediatra',
      email: 'marisa@gmail.com',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],{}),
    

  down: (queryInterface, Sequelize) => queryInterface.bulkInsert('Doctors', null, {}),
};
  
