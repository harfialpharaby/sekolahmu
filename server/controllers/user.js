const { user } = require("../models");
const bcrypt = require("bcrypt");
const generateToken = require("../helpers/generateToken");

class User {
  static async register(req, res, next) {
    try {
      const { fullname, email, password } = req.body;
      const validateEmail = await user.findOne({ where: { email } });
      if (validateEmail) {
        throw new Error("Email already in use!");
      } else {
        const userData = await user.create({ fullname, email, password });
        const token = await generateToken(userData);
        res.status(201).json({ token });
      }
    } catch (error) {
      res.status(500).json(error.message || error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await user.findOne({ where: { email } });
      if (!userData || !bcrypt.compareSync(password, userData.password)) {
        throw new Error("Invalid username or password!");
      } else {
        const token = await generateToken(userData);
        res.status(200).json({ token });
      }
    } catch (error) {
      res.status(500).json(error.message || error);
    }
  }

  static async otp(req, res, next) {
    try {
      const { fullname, email, password } = req.body;
      const userData = await user.findAll();
      res.status(200).json({ fullname, email, password });
    } catch (error) {
      res.status(500).json(error.message || error);
    }
  }
}

module.exports = User;
