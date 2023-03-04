const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "todo_2",
  port: 5432,
  host: "localhost",
  username: "erfajc",
  password: "root",
  dialect: "postgres",
});

module.exports = db; 