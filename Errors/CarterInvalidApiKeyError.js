const CarterResponseError = require('./CarterResponseError');

class CarterInvalidApiKeyError extends CarterResponseError {
  constructor(response) {
    super('You have provided an invalid API Key', response);
  }
}

module.exports = CarterInvalidApiKeyError;
