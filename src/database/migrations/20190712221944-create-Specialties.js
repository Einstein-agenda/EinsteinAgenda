'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Specialties', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      
      specialty: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,

    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Specialties');
  }
};
