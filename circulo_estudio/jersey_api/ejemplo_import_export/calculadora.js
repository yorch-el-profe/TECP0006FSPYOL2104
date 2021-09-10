function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

/*
  exports.suma = function (a, b) {
    return a + b;
  }

  exports.resta = function (a, b) {
    return a - b;
  }
*/

// Exportar todo dentro de un objeto
module.exports = {
  suma: suma,
  resta: resta,
  multiplicacion: multiplicacion,
  division_chafa: division,
};
