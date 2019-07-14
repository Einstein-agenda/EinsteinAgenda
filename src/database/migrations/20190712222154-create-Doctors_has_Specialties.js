'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Doctors_has_Specialties', {

      id_doctor: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Doctors',
          key: 'id'
        }
      },

      id_specialty: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Specialties',
          key: 'id'
        }
      },

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,

    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Doctors_has_Specialties');
  }
};
