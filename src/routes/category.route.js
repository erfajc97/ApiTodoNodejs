const { Router } = require("express");
const categoryController = require("../controllers/category.controller");
const route = Router();

route.get("/api/v1/category", categoryController.getallCategory);
route.post("/api/v1/category", categoryController.createCategory);
route.put("/api/v1/category/:id", categoryController.updateCategory);

module.exports = route;
