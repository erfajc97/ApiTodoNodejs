const User = require("../models/users.models");
const Todo = require("../models/todos.models");
const Category = require("../models/category.models");

class UserServices {
  static async getAll() {
    try {
      const result = await User.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      const result = await User.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getTodoUsers(id) {
    try {
      const result = await User.findByPk(id, {
        attributes:  ["userName"] ,
        include: [
          {
            model: Todo,
            attributes: ["title"],
            include:{
                model: Category,
                attributes:["name"]
            }
          }
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports= UserServices