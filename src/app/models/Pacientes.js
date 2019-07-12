module.exports = (sequelize, DataTypes) => {
    const Pacientes = sequelize.define('Pacientes', {
      nome: DataTypes.STRING(45),
      rg: DataTypes.STRING(12),
      cpf: DataTypes.STRING(14),
      id_contato_paciente: DataTypes.INTEGER,
    });
  
    return Pacientes;
  }