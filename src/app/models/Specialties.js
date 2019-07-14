module.exports = (sequelize, DataTypes) => {
    const Specialties = sequelize.define('Specialties', {
      specialty: DataTypes.STRING(45),
    });
  
    return Specialties;
  }