const User = require("../models/users.models");
const Todo = require("../models/todos.models");
const Category = require("../models/category.models");

class CategoryServices {
  static async getAll() {
    try {
      const result = await Category.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      const result = await Category.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updated(data, id) {
    try {
      const categoryUpdate = await Category.update(data, {
        where: { id },
      });
      return categoryUpdate;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CategoryServices;
