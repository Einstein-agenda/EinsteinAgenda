module.exports = (sequelize, DataTypes) => {
  const Patients = sequelize.define('Patients', {
    name: DataTypes.STRING(45),
    rg: DataTypes.STRING(12),
    cpf: DataTypes.STRING(14),
    id_pacient_contact: DataTypes.INTEGER,
  });

  Patients.associate = (models) => {
    Patients.belongsTo(models.Patients_contacts, { targetKey: 'id', foreignKey: 'id_pacient_contact' });
    Patients.hasMany(models.Schedulings, { targetKey: 'id_pacient', foreignKey: 'id' });
  }

  return Patients;
}