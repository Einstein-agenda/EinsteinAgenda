module.exports = (sequelize, DataTypes) => {
    const Agendamentos = sequelize.define('Agendamentos', {
      data: DataTypes.DATA,
      hora: DataTypes.TIME,
      id_paciente: DataTypes.INTEGER,
      id_medico: DataTypes.INTEGER,
    });
  
    return Agendamentos;
  }