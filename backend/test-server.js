// backend/test-server.js
const createServer = require('./src/index.js');
const app = require('./src/index.js'); // Ajustado a la ruta correcta
const http = require('http');

const server = http.createServer(app);
server.listen(0, () => {
  console.log('Servidor iniciado correctamente para el test');
  process.exit(0);
});
