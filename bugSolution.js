const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const onError = (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use.`);
    process.exit(1);
  } else {
    console.error(`An error occurred: ${error.message}`);
    process.exit(1);
  }
};

const onListening = () => {
  console.log(`Server listening on port ${port}`);
};

server.on('error', onError);

server.listen(port, onListening); 