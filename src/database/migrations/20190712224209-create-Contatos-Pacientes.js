'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Contatos_Pacientes', {
      
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      tel_fixo: {
        allowNull: true,
        type: DataTypes.STRING(13),
      },

      tel_com: {
        allowNull: true,
        type: DataTypes.STRING(13),
      },

      cel_princ: {
        allowNull: false,
        type: DataTypes.STRING(14),
      },

      cel_rec: {
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
    return queryInterface.dropTable('Contatos_Pacientes');
  }
};
