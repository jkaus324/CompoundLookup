const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Compound_look = sequelize.define("lookup", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        imageSource: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        imageAttribution: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        dateModified: {
            type: DataTypes.TEXT,
            allowNull: true
        } // <-- Missing comma here
    },{
        timestamps: false
    });
    return Compound_look;
};
