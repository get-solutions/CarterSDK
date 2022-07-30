const CarterResponseError = require("../CarterResponseError");

class CarterNotFoundError extends CarterResponseError {
  constructor(response) {
    super('The endpoint you requested is not recognised', response);
  }
}

module.exports = CarterNotFoundError;
