const Users = require("./users.models");
const Todos = require("./todos.models");
const  Category = require("./category.models")


const initModels = ()=>{
    Users.hasMany(Todos, {foreignKey: "userId" });
    Todos.belongsTo(Users, {foreignKey: "userId"});

    Category.hasMany(Todos, {foreignKey: "categorieId"});
    Todos.belongsTo(Category, {foreignKey: "categorieId"});
};

module.exports = initModels;