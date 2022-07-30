const CarterError = require('../../../Errors/CarterError');
const CarterResponseError = require('../../../Errors/CarterResponseError');
const CarterInternalServerError = require('../../../Errors/ResponseErrors/CarterInternalServerError');

describe('Carter Forbidden Response Error:', () => {
  it('has a default message', () => {
    const error = new CarterInternalServerError();;
    expect(error.message).toBe('There was a server fault');
  });

  it('is its own type', () => {
    const error = new CarterInternalServerError();;

    expect(error instanceof CarterInternalServerError).toBe(true);
  });

  it('is a type of Carter Error', () => {
    const error = new CarterInternalServerError();;

    expect(error instanceof CarterError).toBe(true);
  });

  it('is a type of Carter Response Error', () => {
    const error = new CarterInternalServerError();

    expect(error instanceof CarterResponseError).toBe(true);
  });

  it('it a type of Error', () => {
    const error = new CarterInternalServerError();;

    expect(error instanceof Error).toBe(true);
  });
});