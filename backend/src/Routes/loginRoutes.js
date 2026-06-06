// loginRoutes.js

const express = require('express');
const loginController = require('../Controllers/loginController');

const router = express.Router();

router.post('/login', loginController.login);

module.exports = router;