const CarterError = require("../../Errors/CarterError");

describe('Carter Error:', () => {
  it('has a default message', () => {
    const error = new CarterError();
    expect(error.message).toBe('An Unknown Error Occured');
  });

  it('is its own type', () => {
    const error = new CarterError();

    expect(error instanceof CarterError).toBe(true);
  });

  it('it a type of Error', () => {
    const error = new CarterError();

    expect(error instanceof Error).toBe(true);
  });
});