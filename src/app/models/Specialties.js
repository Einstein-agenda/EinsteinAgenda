module.exports = (sequelize, DataTypes) => {
    const Especialidades = sequelize.define('Specialties', {
      specialty: DataTypes.STRING(45),
    });
  
    return Specialties;
  }