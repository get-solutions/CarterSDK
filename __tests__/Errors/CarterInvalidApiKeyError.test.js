const CarterError = require('../../Errors/CarterError');
const CarterResponseError = require('../../Errors/CarterResponseError');
const CarterInvalidApiKeyError = require('../../Errors/CarterInvalidApiKeyError');

describe('Carter Invalid API Key Error:', () => {
  it('has a default message', () => {
    const error = new CarterInvalidApiKeyError();
    expect(error.message).toBe('You have provided an invalid API Key');
  });

  it('is its own type', () => {
    const error = new CarterInvalidApiKeyError();

    expect(error instanceof CarterInvalidApiKeyError).toBe(true);
  });

  it('is a type of Carter Error', () => {
    const error = new CarterInvalidApiKeyError();;

    expect(error instanceof CarterError).toBe(true);
  });

  it('is a type of Carter Response Error', () => {
    const error = new CarterInvalidApiKeyError();

    expect(error instanceof CarterResponseError).toBe(true);
  });

  it('it a type of Error', () => {
    const error = new CarterInvalidApiKeyError();;

    expect(error instanceof Error).toBe(true);
  });
});