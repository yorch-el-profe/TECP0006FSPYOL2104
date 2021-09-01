const mongoose = require("mongoose");
const { stringify } = require("querystring");

//const Usuario = new mongoose.Schema({...})

// Destructuring
const { Schema } = mongoose;

/*
  Manera de definir tipos:

  1. campo: Type

  nombre: String, --> nombre VARCHAR(255)
  edad: Number, --> edad BIGINT
  estaVacunado: Boolean --> estaVacunado BOOLEAN

  2. campo: { reglas }

  Las reglas disponibles:
    required: Se indica que el campo es obligatorio
    default: Se asigna un valor por defecto si no se proporciona al crear el documento
    minlength: Se especifica un tamaño minimo
    maxlength: Se especifica un tamaño máximo
    min: Se especifica un monto minimo
    max: Se especifica un monto maximo
    unique: Se especifica que el campo tiene valores únicos


  SQL:

    campo Type NOT NULL
    campo CHAR(5)/VARCHAR(5)
*/

const UsuarioSchema = new Schema(
  {
    nombre: { type: String, required: true },
    edad: { type: Number, min: 15, max: 100 },
    fecha_nac: Date,
    calle: { type: String, required: true },
    ciudad: { type: String, required: true },
    codigo_post: { type: String, length: 5 },
  },
  { collection: "usuarios" }
);

const LibroSchema = new Schema(
  {
    titulo: { type: String, required: true },
    editorial: { type: String, required: true },
    num_pag: Number,
    autores: { type: [String], required: true },
    isbn: { type: String, required: true, unique: true },
  },
  { collection: "libros" }
);

mongoose.connect(
  "mongodb+srv://root:root@cluster-de-ejemplo.iejwi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

// Modelo = conexión con la colección
const UsuarioModel = mongoose.model("usuarios", UsuarioSchema);
const LibroModel = mongoose.model("libros", LibroSchema);

// Crear documentos
/*const harryPotter = new LibroModel({
  titulo: "Harry Potter y la piedra filosofal",
  editorial: "Salamandra",
  num_pag: 223,
  autores: ["J. K. Rowling"],
  isbn: "9788478884452",
});

harryPotter.save();*/

// Consulta (SQL: SELECT * FROM tabla)
LibroModel.find({})
  .exec()
  .then(function (libros) {
    console.log(libros);
  });
