const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Category = db.define("categories", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },

  
},{
  timestamps:false
}

);

module.exports = Category;