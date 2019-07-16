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

      email: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },

      password: {
        allowNull: false,
        type: DataTypes.STRING(20),
      },

      id_patient_phone: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Patients_phones',
          key: 'id'
        },
        onDelete: 'CASCADE',
      },

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,

    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Patients');
  }
};
