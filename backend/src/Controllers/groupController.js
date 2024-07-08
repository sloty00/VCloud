const groupService = require('../Services/groupService');

const createGroup = async (req, res) => {
  const { name } = req.body;
  const group = await groupService.createGroup({ name });
  res.json(group);
};

const getAllGroups = async (req, res) => {
  const groups = await groupService.getAllGroups();
  res.json(groups);
};

const addUserToGroup = async (req, res) => {
  const { groupId, userId } = req.body;
  const userGroup = await groupService.addUserToGroup(groupId, userId);
  res.json(userGroup);
};

module.exports = {
  createGroup,
  getAllGroups,
  addUserToGroup,
};