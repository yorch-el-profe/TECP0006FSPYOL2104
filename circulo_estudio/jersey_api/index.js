const express = require("express");
const mongoose = require("mongoose");
const findJerseysRoutes = require("./routes/find-jerseys");

const app = express();

mongoose.connect(
  "mongodb+srv://root:root@cluster-de-ejemplo.iejwi.mongodb.net/jerseys_db?retryWrites=true&w=majority"
);

app.get("/getJerseys", findJerseysRoutes.findJerseys);

app.listen(8080);
