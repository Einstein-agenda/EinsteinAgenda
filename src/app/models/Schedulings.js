module.exports = (sequelize, DataTypes) => {
    const Schedulings = sequelize.define('Schedulings', {
      date: DataTypes.DATE,
      time: DataTypes.TIME,
      id_pacient: DataTypes.INTEGER,
      id_doctor: DataTypes.INTEGER,
    });

    Schedulings.associate = (models) => {
      Schedulings.belongsTo(models.Patients, {targetKey: 'id', foreignKey: 'id_pacient'});
      Schedulings.belongsTo(models.Doctors, {targetKey: 'id', foreignKey: 'id_doctor'});
    }
  
    return Schedulings;
  }