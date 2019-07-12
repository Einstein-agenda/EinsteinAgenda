'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Medicos_tem_Especialidades', {

      id_medico: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Medicos',
          key: 'id'
        }
      },

      id_especialidade: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Especialidades',
          key: 'id'
        }
      },

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,

    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Medicos_tem_Especialidades');
  }
};
