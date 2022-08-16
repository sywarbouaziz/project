const User = require("../models/authModel");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "super secret key", {
    expiresIn: maxAge,
  });
};

const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  console.log(err);
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  if (err.code === 11000) {
    errors.email = "Email is already registered";
    return errors;
  }

  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};
//register
module.exports.register = async (req, res, next) => {
  try {
    const { email, password,phone,username,speciality,gender} = req.body;
    const user = await User.create({email, password,phone,username,speciality,gender });
    const token = createToken(user._id);

    res.cookie("jwt", token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: maxAge * 1000,
    });

    res.status(201).json({ user: user._id, created: true });
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, created: false });
  }
};
//login
module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id, status: true });
  } catch (err) {
    const errors = handleErrors(err);
    res.json({ errors, status: false });
  }
};
//delete
module.exports.getUsers = async (req, res) => {
  try {
      const users = await User.find();
      res.json(users);
  } catch (error) {
      res.status(500).json({message: error.message});
  }
}

module.exports.getUserById = async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      res.json(user);
  } catch (error) {
      res.status(404).json({message: error.message});
  }
}



module.exports.updateUser = async (req, res) => {
  try {
      const updateduser = await User.updateOne({_id:req.params.id}, {$set: req.body});
      res.status(200).json(updateduser);
  } catch (error) {
      res.status(400).json({message: error.message});
  }
}

module.exports.deleteUser = async (req, res) => {
  try {
      const deleteduser = await User.deleteOne({_id:req.params.id});
      res.status(200).json(deleteduser);
  } catch (error) {
      res.status(400).json({message: error.message});
  }
}
