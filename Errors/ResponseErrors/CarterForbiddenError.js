const CarterResponseError = require("../CarterResponseError");

class CarterForbiddenError extends CarterResponseError {
  constructor(response) {
    super('You are not permitted to use this service', response);
  }
}

module.exports = CarterForbiddenError;
