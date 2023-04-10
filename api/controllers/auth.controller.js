import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(201).send("User has been registered");
  } catch (err) {
    res.status(500).send("Something went seriously wrong!");
  }
};

export const login = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).send("Something went wrong with login!");
  }
};

export const logout = async (req, res) => {};
