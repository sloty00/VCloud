const entityService = require('../Services/entityService');

const createEntity = async (req, res) => {
  const { name, value, ownerId } = req.body;
  const entity = await entityService.createEntity({ name, value, ownerId });
  res.json(entity);
};

const getAllEntities = async (req, res) => {
  const entities = await entityService.getAllEntities();
  res.json(entities);
};

module.exports = {
  createEntity,
  getAllEntities,
};