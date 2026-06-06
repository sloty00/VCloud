const prisma = require('../prismaClient');

const createEntity = async (data) => {
  return await prisma.entity.create({ data });
};

const getAllEntities = async () => {
  return await prisma.entity.findMany({ include: { owner: true } });
};

module.exports = {
  createEntity,
  getAllEntities,
};