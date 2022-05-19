const userSchema = require("../Models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerValidate, loginValidate } = require("./validateUser");

const register = async (req, res) => {
  const { error } = registerValidate(req.body);
  if (error) {
    return res.status(400).send(error.message);
  }

  const checkIfEmailExistInDatabase = await userSchema.findOne({
    email: req.body.email,
  });
  if (checkIfEmailExistInDatabase) {
    return res.status(409).send(`email already exist`);
  }

  const addUserToDatabase = await new userSchema({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  });

  try {
    const saveUser = await addUserToDatabase.save();
    res.status(200).send(`user Registered with successfully`);
  } catch (err) {
    res.status(400).send(`an error ocorried ${err}`);
  }
};

const login = async (req, res) => {
  const { error } = loginValidate(req.body);
  if (error) {
    return res.status(400).send(error.message);
  }

  const findEmailAndPasswordInDataBase = await userSchema.findOne({
    email: req.body.email,
  });

  console.log(findEmailAndPasswordInDataBase);
  if (!findEmailAndPasswordInDataBase) {
    return res.status(404).send(`Email or password not found`);
  }

  const checkPasswordSendIsTheSame = bcrypt.compareSync(
    req.body.password,
    findEmailAndPasswordInDataBase.password
  );
  console.log(checkPasswordSendIsTheSame);

  if (!checkPasswordSendIsTheSame) {
    return res.status(404).send(`email or password not found`);
  }

  const token = jwt.sign(
    {
      _id: findEmailAndPasswordInDataBase._id,
      admin: findEmailAndPasswordInDataBase.admin,
    },
    process.env.JWT_SECRET
  );

  res.header("authorization-token", token);
  res.status(200).send("User Logged");
};

module.exports = { register, login };
