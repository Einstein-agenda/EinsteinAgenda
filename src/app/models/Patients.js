module.exports = (sequelize, DataTypes) => {
  const Patients = sequelize.define('Patients', {
    name: DataTypes.STRING(45),
    rg: DataTypes.STRING(12),
    cpf: DataTypes.STRING(14),
    id_contact_patient: DataTypes.INTEGER,
  });

  Patients.associate = (models) => {
    Patients.belongsTo(models.Patients_contacts, { targetKey: 'id', foreignKey: 'id_contact_patient' });
    Patients.hasMany(models.Scheduling, { targetKey: 'id_pacient', foreignKey: 'id' });
  }

  return Patients;
}