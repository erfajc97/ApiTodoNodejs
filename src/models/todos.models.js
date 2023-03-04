const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Todos = db.define('todo',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    title: {
        type: DataTypes.STRING(60),
        allowNull:false,

    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    },
    categorieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'categorie_id'
    },



})
module.exports = Todos;