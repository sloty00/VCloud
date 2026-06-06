const userService = require('../Services/userService');

const createUser = async (req, res) => {
  const { email, name, password } = req.body;
  const user = await userService.createUser({ email, name, password });
  res.json(user);
};

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

module.exports = {
  createUser,
  getAllUsers,
};