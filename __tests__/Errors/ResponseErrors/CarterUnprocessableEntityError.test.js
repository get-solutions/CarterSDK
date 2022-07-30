const CarterError = require('../../../Errors/CarterError');
const CarterResponseError = require('../../../Errors/CarterResponseError');
const CarterUnprocessableEntityError = require('../../../Errors/ResponseErrors/CarterUnprocessableEntityError');

describe('Carter Forbidden Response Error:', () => {
  it('has a default message', () => {
    const error = new CarterUnprocessableEntityError();;
    expect(error.message).toBe('There was a validation fault with your request');
  });

  it('is its own type', () => {
    const error = new CarterUnprocessableEntityError();;

    expect(error instanceof CarterUnprocessableEntityError).toBe(true);
  });

  it('is a type of Carter Error', () => {
    const error = new CarterUnprocessableEntityError();;

    expect(error instanceof CarterError).toBe(true);
  });

  it('is a type of Carter Response Error', () => {
    const error = new CarterUnprocessableEntityError();

    expect(error instanceof CarterResponseError).toBe(true);
  });

  it('it a type of Error', () => {
    const error = new CarterUnprocessableEntityError();;

    expect(error instanceof Error).toBe(true);
  });
});