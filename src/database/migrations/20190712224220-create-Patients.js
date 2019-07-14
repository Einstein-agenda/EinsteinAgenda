'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Patients', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      name: {
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

      id_patient_contact: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Patients_contacts',
          key: 'id'
        }
      },

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,

    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Patients');
  }
};
