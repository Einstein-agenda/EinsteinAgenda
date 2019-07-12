'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Medicos', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      nome: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },

      crm: {
        allowNull: false,
        type: DataTypes.STRING(13),
        unique: true,
      },

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,

    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Medicos');
  }
};


