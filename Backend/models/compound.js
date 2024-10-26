module.exports = (sequelize, DataTypes) => {
    const Compound = sequelize.define('Compound', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });
  
    return Compound;
  };
  