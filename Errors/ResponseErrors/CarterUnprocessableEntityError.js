const CarterResponseError = require("../CarterResponseError");

class CarterUnprocessableEntityError extends CarterResponseError {
  constructor(response) {
    super('There was a validation fault with your request', response);
  }
}

module.exports = CarterUnprocessableEntityError;
