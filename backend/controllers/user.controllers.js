const UserModel = require("../models/user.model");
const dotenv = require("dotenv");
dotenv.config();

const user_controller = {
  getAll: async (req, res) => {
    const users = await UserModel.find();
    if (users.length > 0) {
      res.status(200).send({ message: "success", data: users });
    } else {
      res.send({ message: "not found", data: null });
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    let user;
    try {
      user = await UserModel.findById(id);
    } catch (error) {
      res.send({ error: error });
    }
    if (user) {
      res.status(200).send({ message: "success", data: user });
    } else {
      res.send({ message: "no content", data: null });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    let response;
    try {
      response = await UserModel.findByIdAndDelete(id);
    } catch (error) {
      res.send({ error: error });
    }
    res.send({ message: "deleted", response: response });
  },
  update: async (req, res) => {
    const { id } = req.params;
    const response = await UserModel.findByIdAndUpdate(id, req.body);
    res.send({ message: "updated", response: response });
  },
  register: async (req, res) => {
    const { username, email } = req.body;
    const duplicateUserName = await UserModel.find({ username: username });
    const duplicateEmail = await UserModel.find({ email: email });
    let message;
    if (duplicateUserName.length > 0) {
      message = "username already exists";
    }
    if (duplicateEmail.length > 0) {
      message = "email already exists";
    }
    const user = new UserModel(req.body);
    await user.save();
    res.send({ message: "registered", data: user });
  }
};

module.exports = user_controller;

