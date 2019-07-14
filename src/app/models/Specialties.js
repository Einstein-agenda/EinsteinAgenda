module.exports = (sequelize, DataTypes) => {
    const Specialties = sequelize.define('Specialties', {
      specialty: DataTypes.STRING(45),
    });
    
    Specialties.associate = (models) => {
      Specialties.belongsToMany(models.Doctors, {
        through: 'Doctors_has_Specialties',
        as: 'id_specialty',
        foreignKey: 'id',
      });
    }
  
    return Specialties;
  }