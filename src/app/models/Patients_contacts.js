module.exports = (sequelize, DataTypes) => {
    const Patients_contacts = sequelize.define('Patients_contacts', {
      landline_number: DataTypes.STRING(13),
      comercial_phone_number: DataTypes.STRING(13),
      mob_phone_number: DataTypes.STRING(14),
      contact_number: DataTypes.STRING(14),
      email: DataTypes.STRING(45),
    });

    Patients_contacts.associate = (models) => {
      Patients_contacts.hasOne(models.Patients, {targetKey: 'id_contact_patient', foreignKey: 'id'});
    }
  
    return Patients_contacts;
  }