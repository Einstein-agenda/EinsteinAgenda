module.exports = (sequelize, DataTypes) => {
  const Doctors = sequelize.define('Doctors', {
    name: DataTypes.STRING(45),
    crm: DataTypes.STRING(13),
  });

  Doctors.associate = (models) => {
    Doctors.belongsToMany(models.Specialties, {
      through: 'Doctors_has_Specialties',
      as: 'id_doctor',
      foreignKey: 'id',
    });
    Doctors.hasMany(models.Schedulings, { targetKey: 'id_doctor', foreignKey: 'id' });
  }

  return Doctors;
}