const CarterResponseError = require('../../Errors/CarterResponseError');
const CarterForbiddenError = require('../../Errors/ResponseErrors/CarterForbiddenError');
const CarterInternalServerError = require('../../Errors/ResponseErrors/CarterInternalServerError');
const CarterNotFoundError = require('../../Errors/ResponseErrors/CarterNotFoundError');
const CarterUnprocessableEntityError = require('../../Errors/ResponseErrors/CarterUnprocessableEntityError');
const ResponseErrorHandler = require('../../Handlers/ResponseErrorHandler');

describe('Response Error Handler:', () => {
  it('will throw CarterForbiddenError if response code is 403', () => {
    const handler = new ResponseErrorHandler({status: 403});

    expect(() => handler.handle()).toThrow(CarterForbiddenError);
  });

  it('will throw CarterNotFoundError if response code is 404', () => {
    const handler = new ResponseErrorHandler({status: 404});

    expect(() => handler.handle()).toThrow(CarterNotFoundError);
  });

  it('will throw CarterUnprocessableEntityError if response code is 422', () => {
    const handler = new ResponseErrorHandler({status: 422});

    expect(() => handler.handle()).toThrow(CarterUnprocessableEntityError);
  });

  it('will throw CarterInternalServerError if response code is 500', () => {
    const handler = new ResponseErrorHandler({status: 500});

    expect(() => handler.handle()).toThrow(CarterInternalServerError);
  });

  it('Will throw CarterResponseError if response code is anything else', () => {
    const handler = new ResponseErrorHandler({status: 101});

    expect(() => handler.handle()).toThrow(CarterResponseError);
  });

  it('Will throw CarterResponseError if response code is not set', () => {
    const handler = new ResponseErrorHandler({});

    expect(() => handler.handle()).toThrow(CarterResponseError);
  });
});
