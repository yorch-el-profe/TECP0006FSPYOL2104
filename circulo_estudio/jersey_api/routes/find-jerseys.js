const JerseyModel = require("../schemas/jersey");

function findJerseys(request, response) {
  JerseyModel.find()
    .exec()
    .then(function (docs) {
      response.json(docs);
    });
}

module.exports = {
  findJerseys: findJerseys,
};
