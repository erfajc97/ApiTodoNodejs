const {  DataTypes } = require("sequelize");
const db = require("../utils/database");

const Users = db.define("users",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userName:{
        type: DataTypes.STRING(30),
        allowNull: false,
        field: 'user_name',
    },
    email : {
        type: DataTypes.STRING(80),
        unique: true,
        allowNull: false,
        validate:{
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING(10),
        allowNull: false,
    }


});

module.exports = Users;