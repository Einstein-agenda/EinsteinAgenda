module.exports = (sequelize, DataTypes) => {
    const Especialidades = sequelize.define('Especialidades', {
      nome: DataTypes.STRING(45),
    });
  
    return Especialidades;
  }