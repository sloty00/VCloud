const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./Routes/userRoutes');
const groupRoutes = require('./Routes/groupRoutes');
const entityRoutes = require('./Routes/entityRoutes');
const uploadRoutes = require('./Routes/uploadRoutes');
const loginRoutes = require('./Routes/loginRoutes');
const cors = require('cors');

const createServer = () => {
  const app = express();

  app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));

  app.options('*', cors());

  app.use(bodyParser.json());
  app.use('/api', userRoutes);
  app.use('/api', groupRoutes);
  app.use('/api', entityRoutes);
  app.use('/api', uploadRoutes);
  app.use('/api', loginRoutes);

  return app;
};

const port = process.env.PORT || 4000;
const app = createServer();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});