module.exports = (sequelize, DataTypes) => {
    const Doctors = sequelize.define('Doctors', {
      name: DataTypes.STRING(45),
      crm: DataTypes.STRING(13),
    });
  
    return Doctors;
  }