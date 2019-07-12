'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Pacientes', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      nome: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },

      rg: {
        allowNull: false,
        type: DataTypes.STRING(12),
        unique: true,
      },

      cpf: {
        allowNull: false,
        type: DataTypes.STRING(14),
        unique: true,
      },

      id_contato_paciente: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Contatos_Pacientes',
          key: 'id'
        }
      },

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,

    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Pacientes');
  }
};
