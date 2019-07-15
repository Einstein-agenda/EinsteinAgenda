module.exports = (sequelize, DataTypes) => {
  const Doctors = sequelize.define('Doctors', {
    name: DataTypes.STRING(45),
    crm: DataTypes.STRING(13),
    specialty: DataTypes.STRING(45),
    email: DataTypes.STRING(45),
    password: DataTypes.STRING(20),
  });

  Doctors.associate = (models) => {
    Doctors.hasMany(models.Schedulings, { targetKey: 'id_doctor', foreignKey: 'id' });
  }

  return Doctors;
}