const fs = require("fs");
const path = require("path");
const config = require("../config/config");
const { Sequelize, DataTypes } = require("sequelize");
const db = {};

const sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    config.db.options
);

fs.readdirSync(__dirname)
    .filter((file) => file !== "index.js")
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, DataTypes);       
        db[model.name] = model;
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
