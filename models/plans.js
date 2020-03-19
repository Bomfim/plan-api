const db = require('../config/db');
const type = db.Sequelize;

let plans = db.define('plans', {
    Id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    IdProfile: type.INTEGER,
    Description: type.STRING,
    Visible: type.BOOLEAN,
    LifespanBegin: type.DATE,
    LifespanEnd: type.DATE,
    Version: type.STRING,
    Status: type.BOOLEAN
});

module.exports = plans;