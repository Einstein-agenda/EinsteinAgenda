module.exports = (sequelize, DataTypes) => {
    const Patients_phones = sequelize.define('Patients_phones', {
      landline_number: DataTypes.STRING(13),
      comercial_phone_number: DataTypes.STRING(13),
      mob_phone_number: DataTypes.STRING(14),
    });

    Patients_phones.associate = (models) => {
      Patients_phones.hasOne(models.Patients, {targetKey: 'id_patient_phone', foreignKey: 'id'});
    }
  
    return Patients_phones;
  }