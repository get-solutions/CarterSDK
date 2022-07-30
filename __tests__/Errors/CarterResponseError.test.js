const CarterError = require('../../Errors/CarterError');
const CarterResponseError = require('../../Errors/CarterResponseError');

describe('Carter Response Error:', () => {
  it('has a default message', () => {
    const error = new CarterResponseError();
    expect(error.message).toBe('There was an error with the response');
  });

  it('is its own type', () => {
    const error = new CarterResponseError();

    expect(error instanceof CarterResponseError).toBe(true);
  });

  it('is a type of Carter Error', () => {
    const error = new CarterResponseError();

    expect(error instanceof CarterError).toBe(true);
  });

  it('it a type of Error', () => {
    const error = new CarterResponseError();

    expect(error instanceof Error).toBe(true);
  });
});