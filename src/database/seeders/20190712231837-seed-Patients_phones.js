'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Patients_phones', [
    {
      landline_number: null,
      comercial_phone_number: null,
      mob_phone_number: '(11)97896-7412',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      landline_number: '(11)4455-6633',
      comercial_phone_number: '(11)4789-4123',
      mob_phone_number: '(11)9999-4412',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      landline_number: null,
      comercial_phone_number: null,
      mob_phone_number: '(11)97777-1234',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ],{}),
    

  down: (queryInterface, Sequelize) => queryInterface.bulkInsert('Patients_phones', null, {}),
};
