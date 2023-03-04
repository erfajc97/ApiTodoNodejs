const {Router} = require("express")
const userController = require("../controllers/user.controller");
const route = Router();


    route.get("/api/v1/users", userController.getallUsers);
    route.post("/api/v1/users", userController.createUsers);
    // Coge un usuario por el id y trae todas sus tareas y sus categorias
    route.get("/api/v1/users/:id/todo/category", userController.getTodoOfUser);


module.exports = route;

