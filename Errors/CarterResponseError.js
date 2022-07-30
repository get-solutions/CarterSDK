const CarterError = require("./CarterError");

class CarterResponseError extends CarterError {
  #response;

  constructor(message = 'There was an error with the response', response = null) {
    super(message);
    this.#response = response;
  }

  getResponse() {
    return this.response;
  }
}

module.exports = CarterResponseError;
