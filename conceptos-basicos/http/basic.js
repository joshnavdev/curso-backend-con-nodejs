import { createServer, request } from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  // req => todo lo que llega del cliente como headers, body, etc
  // res => todo lo que se le va a enviar al cliente

  // BASIC
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World!');

  // REQUEST
  // const { url, headers } = req;
  // const host = headers?.host;

  // console.log({ url, headers, host });
  // res.end();

  // RESPONSE
  // const users = [
  //   { name: 'Joshua', age: 29 },
  //   { name: 'Nicolas', age: 32 },
  // ];

  // res.setHeader('Content-Type', 'application/json');
  // // res.end(users);
  // res.end(JSON.stringify(users));

  // READ REQ BODY -> NodeJS usa stream de datos para las lecturas

  const bodyBuffer = [];

  req.on('data', (chunck) => {
    bodyBuffer.push(chunck);
  });

  req.on('end', () => {
    const body = Buffer.concat(bodyBuffer).toString();

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    res.end(body);
  });
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}`);
});
