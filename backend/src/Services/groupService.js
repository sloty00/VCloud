const prisma = require('../prismaClient');

const createGroup = async (data) => {
  return await prisma.group.create({ data });
};

const getAllGroups = async () => {
  return await prisma.group.findMany({ include: { users: { include: { user: true } } } });
};

const addUserToGroup = async (groupId, userId) => {
  return await prisma.userGroup.create({
    data: {
      userId,
      groupId
    }
  });
};

module.exports = {
  createGroup,
  getAllGroups,
  addUserToGroup,
};