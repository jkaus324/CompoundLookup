const { Sequelize } = require('sequelize');
const config = require('../config/config')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
});


const db = { sequelize, Sequelize };
db.Compound_look = require('./Compound')(sequelize, Sequelize);

module.exports = db;