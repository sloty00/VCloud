const express = require('express');
const entityController = require('../Controllers/entityController');

const router = express.Router();

router.post('/entities', entityController.createEntity);
router.get('/entities', entityController.getAllEntities);

module.exports = router;