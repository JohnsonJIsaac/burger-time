"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
  console.log("YAYAYAYAYAY:          models/index.js\n")
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
  console.log("YOYOYOYOYYOY:          models/index.js\n")
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(function(file) {
    console.log("\n\nYEYEYEYEYYEYEYEYEYEYEYEYE:          models/index.js\n\n")
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  console.log("\n\nSOMETHING GOES HERE:          models/index.js\n")
  if (db[modelName].associate) {
    db[modelName].associate(db);
    console.log("\n\nThat SOMETHING HAPPENED\n")
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
