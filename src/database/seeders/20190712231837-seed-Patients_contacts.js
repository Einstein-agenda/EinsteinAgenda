'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Patients_contacts', [
    {
      landline_number: null,
      comercial_phone_number: null,
      mob_phone_number: '(11)97896-7412',
      contact_number: null,
      email: 'rosaura@rosaura.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      landline_number: '(11)4455-6633',
      comercial_phone_number: '(11)4789-4123',
      mob_phone_number: '(11)9999-4412',
      contact_number: null,
      email: 'robson@robson.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      landline_number: null,
      comercial_phone_number: null,
      mob_phone_number: '(11)97777-1234',
      contact_number: '(11)9873-3698',
      email: 'maria@maria.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ],{}),
    

  down: (queryInterface, Sequelize) => queryInterface.bulkInsert('Patients_contacts', null, {}),
};
