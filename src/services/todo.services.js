const User = require("../models/users.models");
const Todo = require("../models/todos.models");
const Category = require("../models/category.models");

class TodoServices {
  static async getAll() {
    try {
      const result = await Todo.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      const result = await Todo.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updated(data, id) {
    try {
      const todoUpdate = await Todo.update(data, {
        where: { id },
      });
      return todoUpdate;
    } catch (error) {
      throw error;
    }
  }

  static async deletes(id) {
    try {
      const result = await Todo.destroy({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TodoServices;
