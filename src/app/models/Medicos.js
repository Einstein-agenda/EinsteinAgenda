module.exports = (sequelize, DataTypes) => {
    const Medicos = sequelize.define('Medicos', {
      nome: DataTypes.STRING(45),
      crm: DataTypes.STRING(13),
    });
  
    return Medicos;
  }