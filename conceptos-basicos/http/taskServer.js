// SOLO SI HAY TIEMPO
import http from 'http';

const port = 3000;

const tasks = [];
let currentId = 1;

const getRequestBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      resolve(body);
    });

    req.on('error', (error) => {
      reject(error);
    });
  });
};

const server = http.createServer((req, res) => {
  const { method, url } = req;
});

server.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
