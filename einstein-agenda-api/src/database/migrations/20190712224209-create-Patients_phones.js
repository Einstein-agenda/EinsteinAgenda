'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Patients_phones', {
      
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

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,

    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Patients_phones');
  }
};
