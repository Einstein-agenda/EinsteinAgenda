module.exports = (sequelize, DataTypes) => {
    const Scheduling = sequelize.define('Scheduling', {
      date: DataTypes.DATE,
      time: DataTypes.TIME,
      id_pacient: DataTypes.INTEGER,
      id_doctor: DataTypes.INTEGER,
    });
  
    return Scheduling;
  }