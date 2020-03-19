var Sequelize = require('sequelize');
var userName = 'pocdev';
var password = '';
var hostName = 'pocdev.cnkr1zuazgrt.us-east-2.rds.amazonaws.com';
var DbName = 'db_poc_hb';

const Op = Sequelize.Op;
// Initialize Sequelize to connect to sample DB
const sequelize = new Sequelize(DbName, userName, password, {
  dialect: 'mssql',
  host: hostName,
  port: 1433, // Default port
  logging: false, // disable logging; default: console.log
  operatorsAliases: {
    $and: Op.and,
    $or: Op.or,
    $eq: Op.eq,
    $gt: Op.gt,
    $lt: Op.lt,
    $lte: Op.lte,
    $like: Op.like
  },
  dialectOptions: {
    encrypt: true,
    requestTimeout: 30000 // timeout = 30 seconds
  }
});

module.exports = sequelize;