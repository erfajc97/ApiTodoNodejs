const UserServices = require("../services/user.services");

const getallUsers = async (req, res) => {
  try {
    const user = await UserServices.getAll();
    res.status(200).json({
      status: "succes",
      user,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const createUsers = async (req, res) => {
  try {
    const data = req.body;
    const user = await UserServices.create(data);
    res.status(200).json({
      status: "succes",
      user,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const getTodoOfUser = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await UserServices.getTodoUsers(id);
    res.status(200).json({
      status: "succes",
      user,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getallUsers,
  createUsers,
  getTodoOfUser,
};
