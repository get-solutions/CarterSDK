class CarterError extends Error {
  constructor(message = 'An Unknown Error Occured') {
    super(message);
  }
}

module.exports = CarterError;
