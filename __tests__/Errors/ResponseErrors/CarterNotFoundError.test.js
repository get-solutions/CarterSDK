const CarterError = require('../../../Errors/CarterError');
const CarterResponseError = require('../../../Errors/CarterResponseError');
const CarterNotFoundError = require('../../../Errors/ResponseErrors/CarterNotFoundError');

describe('Carter Forbidden Response Error:', () => {
  it('has a default message', () => {
    const error = new CarterNotFoundError();;
    expect(error.message).toBe('The endpoint you requested is not recognised');
  });

  it('is its own type', () => {
    const error = new CarterNotFoundError();;

    expect(error instanceof CarterNotFoundError).toBe(true);
  });

  it('is a type of Carter Error', () => {
    const error = new CarterNotFoundError();;

    expect(error instanceof CarterError).toBe(true);
  });

  it('is a type of Carter Response Error', () => {
    const error = new CarterNotFoundError();

    expect(error instanceof CarterResponseError).toBe(true);
  });

  it('it a type of Error', () => {
    const error = new CarterNotFoundError();;

    expect(error instanceof Error).toBe(true);
  });
});