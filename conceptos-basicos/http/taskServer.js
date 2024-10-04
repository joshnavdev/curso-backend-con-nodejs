// SOLO SI HAY TIEMPO
import http from 'http';

const port = 3000;

const tasks = [];
let currentId = 1;

// Helper / utils
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

// Controllers
const getTasks = async (req, res) => {
  return tasks;
};

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/tasks') {
    const tasks = await getTasks(req, res);
  }
});

server.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
