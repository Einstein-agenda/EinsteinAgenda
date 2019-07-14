'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Doctors_has_Specialties', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      
      id_doctor: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Doctors',
          key: 'id'
        },
        onDelete: 'CASCADE',
      },

      id_specialty: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Specialties',
          key: 'id'
        },
        onDelete: 'CASCADE',
      },

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,

    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Doctors_has_Specialties');
  }
};
