const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('../Routes/userRoutes');
const groupRoutes = require('../Routes/groupRoutes');
const entityRoutes = require('../Routes/entityRoutes');
const uploadRoutes = require('../Routes/uploadRoutes');
const loginRoutes = require('../Routes/loginRoutes');

const createServer = () => {
  const app = express();

  app.use(bodyParser.json());

  // Agrega cualquier middleware adicional aquí

  app.use('/api', userRoutes);
  app.use('/api', groupRoutes);
  app.use('/api', entityRoutes);
  app.use('/api', uploadRoutes);
  app.use('/api', loginRoutes);

  return app;
};

module.exports = createServer;
