const CarterError = require('../../../Errors/CarterError');
const CarterResponseError = require('../../../Errors/CarterResponseError');
const CarterForbiddenError = require('../../../Errors/ResponseErrors/CarterForbiddenError');

describe('Carter Forbidden Response Error:', () => {
  it('has a default message', () => {
    const error = new CarterForbiddenError();;
    expect(error.message).toBe('You are not permitted to use this service');
  });

  it('is its own type', () => {
    const error = new CarterForbiddenError();;

    expect(error instanceof CarterForbiddenError).toBe(true);
  });

  it('is a type of Carter Error', () => {
    const error = new CarterForbiddenError();;

    expect(error instanceof CarterError).toBe(true);
  });

  it('is a type of Carter Response Error', () => {
    const error = new CarterForbiddenError();

    expect(error instanceof CarterResponseError).toBe(true);
  });

  it('it a type of Error', () => {
    const error = new CarterForbiddenError();;

    expect(error instanceof Error).toBe(true);
  });
});