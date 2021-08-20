const http = require("http");

const server = http.createServer(function (request, response) {
  response.write('<h1 style="color: blue;">Hello World</h1>');
  response.end();
});

server.listen(8080);
