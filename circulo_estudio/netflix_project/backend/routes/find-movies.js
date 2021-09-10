const MovieModel = require("../schemas/movie");

function findMovies(request, response) {
  MovieModel.find()
    .exec()
    .then(function (docs) {
      response.json(docs);
    });
}

module.exports = findMovies;
