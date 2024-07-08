const express = require('express');
const upload = require('../Services/uploadService');
const uploadController = require('../Controllers/uploadController');

const router = express.Router();

router.post('/upload', upload.single('file'), uploadController.uploadFile);

module.exports = router;