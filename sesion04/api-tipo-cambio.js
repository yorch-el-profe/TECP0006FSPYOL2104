const database = [
  {
    currency: "MXN",
    rates: [
      {
        currency: "USD",
        value: 0.0496,
      },
      {
        currency: "JPY",
        value: 5.44,
      },
    ],
  },
  {
    currency: "USD",
    rates: [
      {
        currency: "MXN",
        value: 20.18,
      },
      {
        currency: "JPY",
        value: 109.74,
      },
    ],
  },
  {
    currency: "JPY",
    rates: [
      {
        currency: "USD",
        value: 0.0091,
      },
      {
        currency: "MXN",
        value: 0.18,
      },
    ],
  },
];

const express = require("express");

const server = express();

server.get("/tiposCambio", function (request, response) {
  response.json(database);
});

server.get("/cambio", function (request, response) {
  const result = database.find((x) => x.currency === request.query.m);
  const result2 = result.rates.find((x) => x.currency === request.query.c);

  response.json({
    value: request.query.v * result2.value,
  });
});

server.listen(8080);
