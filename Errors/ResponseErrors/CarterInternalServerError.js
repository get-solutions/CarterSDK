const CarterResponseError = require("../CarterResponseError");

class CarterInternalServerError extends CarterResponseError {
  constructor(response) {
    super('There was a server fault', response);
  }
}

module.exports = CarterInternalServerError;
