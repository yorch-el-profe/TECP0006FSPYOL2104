/*
  1. Crear los esquemas/modelos de la base de datos
*/
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://root:root@cluster-de-ejemplo.iejwi.mongodb.net/uber?retryWrites=true&w=majority"
);

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
  },
  { collection: "users" }
);

const UserModel = mongoose.model("users", UserSchema);

/*
  2. Crear un API
*/
const express = require("express");
const app = express();

// Permito que mi servidor acepte JSON como transferencia de datos
app.use(express.json());

app.get("/createAccount", function (request, response) {
  const account = new UserModel({
    name: request.body.name,
    email: request.body.email,
    password: request.body.password,
  });

  account
    .save()
    // La información se insertó de manera adecuada
    .then(function () {
      response.send("Usuario registrado");
    })
    // Ocurrió un error en la inserción
    .catch(function () {
      response.send("Ocurrió un error al registrar al usuario");
    });
});

app.listen(8080);
