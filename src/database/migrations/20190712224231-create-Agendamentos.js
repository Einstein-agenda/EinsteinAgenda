'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Agendamentos', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      data: {
        allowNull: false,
        type: DataTypes.DATE,
      },

      hora: {
        allowNull: false,
        type: DataTypes.TIME,
      },

      id_paciente: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Pacientes',
          key: 'id'
        }
      },

      id_medico: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Medicos',
          key: 'id'
        }
      },

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Agendamentos');
  }
};

