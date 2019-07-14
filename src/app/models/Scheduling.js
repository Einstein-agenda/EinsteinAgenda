module.exports = (sequelize, DataTypes) => {
    const Scheduling = sequelize.define('Scheduling', {
      date: DataTypes.DATE,
      time: DataTypes.TIME,
      id_pacient: DataTypes.INTEGER,
      id_doctor: DataTypes.INTEGER,
    });

    Scheduling.associate = (models) => {
      Scheduling.belongsTo(models.Patients, {targetKey: 'id', foreignKey: 'id_pacient'});
      Scheduling.belongsTo(models.Doctors, {targetKey: 'id', foreignKey: 'id_doctor'});
    }
  
    return Scheduling;
  }