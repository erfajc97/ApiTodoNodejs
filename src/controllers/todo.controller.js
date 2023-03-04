const TodoServices = require("../services/todo.services");

const getallTodo = async (req, res) => {
  try {
    const todo = await TodoServices.getAll();
    res.status(200).json({
      status: "succes",
      todo,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const createTodo = async (req, res) => {
  try {
    const data = req.body;
    const todo = await TodoServices.create(data);
    res.status(200).json({
      status: "succes",
      todo,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await TodoServices.updated(data, id);

    res.status(200).json({
      status: "Succes",
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      error,
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
   
    const result = await TodoServices.deletes(id);
    res.status(200).json({
      status: "Succes",
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      error,
    });
  }
};

module.exports = {
  getallTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
