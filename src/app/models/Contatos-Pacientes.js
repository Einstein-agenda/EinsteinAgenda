module.exports = (sequelize, DataTypes) => {
    const Contatos = sequelize.define('Contatos-Pacientes', {
      tel_fixo: DataTypes.STRING(13),
      tel_com: DataTypes.STRING(13),
      cel_princ: DataTypes.STRING(14),
      cel_rec: DataTypes.STRING(14),
      email: DataTypes.STRING(45),
    });
  
    return Contatos;
  }