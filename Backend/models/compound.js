module.exports = (sequelize, DataTypes) => {
    const Compound = sequelize.define('Compound', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'compoundname' // Maps CSV column to model field
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'compounddescription' // Maps CSV column to model field
      },
      imageSource: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'strImageSource' // Maps CSV column to model field
      },
      imageAttribution: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'strImageAttribution' // Maps CSV column to model field
      },
      dateModified: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'datemodified' // Maps CSV column to model field
      }
    }, {
      tableName: 'Compounds', // Ensure this matches your actual table name
      timestamps: false // Disable automatic `createdAt` and `updatedAt` fields
    });
  
    return Compound;
  };
  