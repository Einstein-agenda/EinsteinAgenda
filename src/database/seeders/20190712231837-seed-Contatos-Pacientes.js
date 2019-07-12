'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Contatos_Pacientes', [
    {
      tel_fixo: null,
      tel_com: null,
      cel_princ: '(11)97896-7412',
      cel_rec: null,
      email: 'rosaura@rosaura.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tel_fixo: '(11)4455-6633',
      tel_com: '(11)4789-4123',
      cel_princ: '(11)9999-4412',
      cel_rec: null,
      email: 'robson@robson.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tel_fixo: null,
      tel_com: null,
      cel_princ: '(11)97777-1234',
      cel_rec: '(11)9873-3698',
      email: 'maria@maria.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ],{}),
    

  down: (queryInterface, Sequelize) => queryInterface.bulkInsert('Contatos_Pacientes', null, {}),
};
