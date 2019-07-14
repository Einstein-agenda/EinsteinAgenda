module.exports = (sequelize, DataTypes) => {
  const Patients = sequelize.define('Patients', {
    name: DataTypes.STRING(45),
    rg: DataTypes.STRING(12),
    cpf: DataTypes.STRING(14),
    email: DataTypes.STRING(45),
    password: DataTypes.STRING(20),
    id_patient_phone: DataTypes.INTEGER,
  });

  Patients.associate = (models) => {
    Patients.belongsTo(models.Patients_phones, { targetKey: 'id', foreignKey: 'id_patient_phone' });
    Patients.hasMany(models.Scheduling, { targetKey: 'id_pacient', foreignKey: 'id' });
  }

  return Patients;
}