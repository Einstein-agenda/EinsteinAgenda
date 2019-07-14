'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Scheduling', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      date: {
        allowNull: false,
        type: DataTypes.DATE,
      },

      time: {
        allowNull: false,
        type: DataTypes.TIME,
      },

      id_patient: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Patients',
          key: 'id'
        }
      },

      id_doctor: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Doctors',
          key: 'id'
        }
      },

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Scheduling');
  }
};

