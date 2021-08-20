// 1. Importar express
const express = require("express");

// 2. Creo un servidor
const server = express();

// 3. Agregar rutas/endpoints
server.get("/hello", function (request, response) {
  response.send("Hello World");
});

server.get("/modulo", function (request, response) {
  response.send("Backend Fundamentals");
});

// 4. Escuchar un puerto
server.listen(8080);
