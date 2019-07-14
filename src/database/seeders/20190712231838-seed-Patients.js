'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Patients', [
    {
      name: 'Rosaura da Silva',
      rg: '42.875.447-9',
      cpf: '236.745.650-78',
      email: 'rosaura@rosaura.com',
      password: '123',
      id_patient_phone: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Robson Pereira da Silva',
      rg: '12.875.000-9',
      cpf: '236.187.650-24',
      email: 'robson@robson.com',
      password: '123',
      id_patient_phone: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Maria das Rosas Silva',
      rg: '10.875.123-0',
      cpf: '456.845.777-88',
      email: 'maria@maria.com',
      password: '123',
      id_patient_phone: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {}),


  down: (queryInterface, Sequelize) => queryInterface.bulkInsert('Patients', null, {}),
};
