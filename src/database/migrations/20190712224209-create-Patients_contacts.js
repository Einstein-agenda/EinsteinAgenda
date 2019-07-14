'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Patients_contacts', {
      
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      landline_number: {
        allowNull: true,
        type: DataTypes.STRING(13),
      },

      comercial_phone_number: {
        allowNull: true,
        type: DataTypes.STRING(13),
      },

      mob_phone_number: {
        allowNull: false,
        type: DataTypes.STRING(14),
      },

      contact_number: {
        allowNull: true,
        type: DataTypes.STRING(14),
      },

      email: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,

    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Patients_contacts');
  }
};
