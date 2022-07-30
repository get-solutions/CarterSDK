const CarterResponseError = require('../Errors/CarterResponseError');
const CarterForbiddenError = require('../Errors/ResponseErrors/CarterForbiddenError');
const CarterNotFoundError = require('../Errors/ResponseErrors/CarterNotFoundError');
const CarterUnprocessableEntityError = require('../Errors/ResponseErrors/CarterUnprocessableEntityError');
const CarterInternalServerError = require('../Errors/ResponseErrors/CarterInternalServerError');

class ResponseErrorHandler {
  response;
  #responseCode;

  constructor(response) {
    this.#responseCode = response?.status || null;
    this.response = response || null;
  }

  handle() {
    switch (this.#responseCode) {
      case 403: //Forbidden
        throw new CarterForbiddenError(this.response);
      case 404: //Not Found
        throw new CarterNotFoundError(this.response);
      case 422: //Unprocessable Entity
        throw new CarterUnprocessableEntityError(this.response);
      case 500: //Internal Server Error
        throw new CarterInternalServerError(this.response);
      default:
        throw new CarterResponseError(
          'Something outside of the normal responses happened',
          this.response,
        );
    }
  }
}

module.exports = ResponseErrorHandler;
