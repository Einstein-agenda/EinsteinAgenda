module.exports = (sequelize, DataTypes) => {
    const Patients = sequelize.define('Patients', {
      name: DataTypes.STRING(45),
      rg: DataTypes.STRING(12),
      cpf: DataTypes.STRING(14),
      id_contact_patient: DataTypes.INTEGER,
    });
  
    return Patients;
  }