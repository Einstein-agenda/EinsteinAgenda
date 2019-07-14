module.exports = (sequelize, DataTypes) => {
  const Patients = sequelize.define('Patients', {
    name: DataTypes.STRING(45),
    rg: DataTypes.STRING(12),
    cpf: DataTypes.STRING(14),
    id_patient_contact: DataTypes.INTEGER,
  });

  Patients.associate = (models) => {
    Patients.belongsTo(models.Patients_contacts, { targetKey: 'id', foreignKey: 'id_patient_contact' });
    Patients.hasMany(models.Schedulings, { targetKey: 'id_patient', foreignKey: 'id' });
  }

  return Patients; 
}