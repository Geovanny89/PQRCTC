const { Sequelize } = require('sequelize');
require('dotenv').config();

const { DB_HOST, DB_NAME, DB_DATABASE, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_DATABASE, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres'
});

module.exports = sequelize;
