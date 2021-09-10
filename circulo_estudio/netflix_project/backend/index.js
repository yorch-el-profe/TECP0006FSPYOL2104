const express = require("express");
const mongoose = require("mongoose");
const findMovies = require("./routes/find-movies");
const cors = require("cors");

const app = express();

// Habilita que cualquier dominio pueda realizar peticiones al back
app.use(cors());

mongoose.connect(
  "mongodb+srv://root:root@cluster-de-ejemplo.iejwi.mongodb.net/netflix?retryWrites=true&w=majority"
);

app.get("/getMovies", findMovies);

app.listen(8080);
