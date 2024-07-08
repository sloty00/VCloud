const express = require('express');
const groupController = require('../Controllers/groupController');

const router = express.Router();

router.post('/groups', groupController.createGroup);
router.get('/groups', groupController.getAllGroups);
router.post('/groups/addUser', groupController.addUserToGroup);

module.exports = router;