const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt")
const dotenv = require("dotenv");
const jwt = require('jsonwebtoken')
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
    // const { username, email } = req.body;
    // const duplicateUserName = await UserModel.find({ username: username });
    // const duplicateEmail = await UserModel.find({ email: email });
    // let message;
    // if (duplicateUserName.length > 0) {
    //   message = "username already exists";
    // }
    // if (duplicateEmail.length > 0) {
    //   message = "email already exists";
    // }
    // const user = new UserModel(req.body);
    // await user.save();
    // res.send({ message: "registered", data: user });

    try {
      const { username, password, email,role } = req.body;
      const userExists = await UserModel.findOne({ username });
      // const duplicateEmail = await UserModel.find({ email: email });

      if (userExists) {
        return res.status(409).json({ message: "username already exists" });
      }

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);

      const newUser = new UserModel({
        ...req.body,
        password: hash,
      });

      await newUser.save();

      res.status(200).send({ message: "register oldu", data: newUser });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  deleteAll: async (req, res) => {
    try {
      const users = await UserModel.deleteMany();
      res.status(200).json({ message: "Silindi" });
    } catch (error) {
      res.status(200).json({ message: "Internla Server Error" });
    }
  },

  login : async(req,res) =>{
    try {
      const user = await UserModel.findOne({ email: req.body.email });
  
      const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!isPasswordCorrect)
        return  res.status(404).json({message : "Parol sehbdif"});
  
      const token = jwt.sign(
        {
          userId: user.id,
          username: user.username,
          email: user.email,
        },
        process.env.JWT,
        { expiresIn: "1h" }
      );
  
      const { password, ...otherDetails } = user._doc;
      res
        .status(200)
        .json({
          message: "Login successful",
          details: { ...otherDetails },
          token,
        });
    } catch (err) {
      res.status(500).json({message : err.message})
    }
  }
};

module.exports = user_controller;
