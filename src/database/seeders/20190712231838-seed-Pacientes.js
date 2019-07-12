'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Pacientes', [
    {
      nome: 'Rosaura da Silva',
      rg: '42.875.447-9',
      cpf: '236.745.650-78',
      id_contato_paciente: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Robson Pereira da Silva',
      rg: '12.875.000-9',
      cpf: '236.187.650-24',
      id_contato_paciente: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Maria das Rosas Silva',
      rg: '10.875.123-0',
      cpf: '456.845.777-88',
      id_contato_paciente: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ],{}),
    

  down: (queryInterface, Sequelize) => queryInterface.bulkInsert('Pacientes', null, {}),
};
