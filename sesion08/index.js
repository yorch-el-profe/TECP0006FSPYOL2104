const express = require("express");

const app = express();

app.get("/", function (request, response) {
  response.sendFile(`${__dirname}/index.html`);
});

app.get("/test", function (request, response) {
  response.send("Esto es una prueba");
});

app.listen(8080);
