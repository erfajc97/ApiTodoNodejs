const { Router } = require("express");
const todosController = require("../controllers/todo.controller");
const route = Router();

route.get("/api/v1/todos", todosController.getallTodo);
route.post("/api/v1/todos", todosController.createTodo);

// Actualiza el status de las tareas
route.put("/api/v1/todos/:id", todosController.updateTodo);

// Elimina una tarea
route.delete("/api/v1/todos/:id", todosController.deleteTodo);

module.exports = route;
