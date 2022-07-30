const MockAdapter = require('axios-mock-adapter');
const Carter = require('../Carter');
const CarterForbiddenError = require('../Errors/ResponseErrors/CarterForbiddenError');
const axios = require('../axios.instance');
const CarterNotFoundError = require('../Errors/ResponseErrors/CarterNotFoundError');
const CarterUnprocessableEntityError = require('../Errors/ResponseErrors/CarterUnprocessableEntityError');
const CarterInternalServerError = require('../Errors/ResponseErrors/CarterInternalServerError');
const CarterResponseError = require('../Errors/CarterResponseError');
const CarterInvalidApiKeyError = require('../Errors/CarterInvalidApiKeyError');
const fs = require('fs');
const ChatResponse = require('../Responses/ChatResponse');

describe('Carter:', () => {
  let mock;
  const URL = 'https://api.carterapi.com/v0';

  beforeAll(() => {
    mock = new MockAdapter(axios, {onNoMatch: "throwException"});
  });

  afterEach(() => {
    mock.reset();
  });

  describe('Chat:', () => {
    describe('Error Handling:', () => {
      it('will correctly handle an invalid API Key Error', async () => {
        mock.onPost('/v0/chat').reply(200, {error: 'invalid api key'});
        const carter = new Carter('someKey');

        await expect(carter.chat('hello')).rejects.toThrow(CarterInvalidApiKeyError);
      });

      it('will correctly handle a Forbidden Error', async () => {
        mock.onPost('/v0/chat').reply(403);
        const carter = new Carter('someKey');
  
        await expect(carter.chat('hello')).rejects.toThrow(CarterForbiddenError);
      });
  
      it('will correctly handle a Not Found Error', async () => {
        mock.onPost('/v0/chat').reply(404);
        const carter = new Carter('someKey');
  
        await expect(carter.chat('hello')).rejects.toThrow(CarterNotFoundError);
      });
  
      it('will correctly handle an Unprocessable Entity Error', async () => {
        mock.onPost('/v0/chat').reply(422);
        const carter = new Carter('someKey');
  
        await expect(carter.chat('hello')).rejects.toThrow(CarterUnprocessableEntityError);
      });
  
      it('will correctly handle an Internal Server Error', async () => {
        mock.onPost('/v0/chat').reply(500);
        const carter = new Carter('someKey');
  
        await expect(carter.chat('hello')).rejects.toThrow(CarterInternalServerError);
      });
  
      it('will correctly handle another odd error', async () => {
        mock.onPost('/v0/chat').reply(543);
        const carter = new Carter('someKey');
  
        await expect(carter.chat('hello')).rejects.toThrow(CarterResponseError);
      });
    });

    describe('Successful Response:', () => {
      it('will handle a succesful response', async () => {
        const chatResponse =  {
          input: 'hello there',
          triggers: [],
          question: false,
          output: {
            text: 'Hello, you doing okay?',
            supplier: 'sc-pi',
            voice: 'https://api.carterapi.com/v0/speak/someapikey/hello'
          },
          sentiment: {
            input: {
              label: 'NEU',
              confidence: 0.6658062934875488
            }
          },
          time_taken: 0.25586438179016113,
          credits_used: 2,
          tid: '165919465562e3b41dd6603e74b38c6197'
        };

        const audioFile = fs.readFileSync(__dirname + '/fixtures/hello.wav');
        
        mock.onPost(`/v0/chat`).reply(200, chatResponse);
        mock.onGet(`/v0/speak/someKey/hello`).reply(200, audioFile);
        const carter = new Carter('someKey');
  
        await expect(carter.chat('hello')).resolves.toBeInstanceOf(ChatResponse);
      })
    });
  });

  describe('Add Intent:', () => {
    describe('Error Handling:', () => {
      it('will correctly handle an invalid API Key Error', async () => {
        mock.onPost('/v0/add-intent').reply(200, {error: 'invalid api key'});
        const carter = new Carter('someKey');

        await expect(carter.addIntent({})).rejects.toThrow(CarterInvalidApiKeyError);
      });

      it('will correctly handle a Forbidden Error', async () => {
        mock.onPost('/v0/add-intent').reply(403);
        const carter = new Carter('someKey');
  
        await expect(carter.addIntent({})).rejects.toThrow(CarterForbiddenError);
      });
  
      it('will correctly handle a Not Found Error', async () => {
        mock.onPost('/v0/add-intent').reply(404);
        const carter = new Carter('someKey');
  
        await expect(carter.addIntent({})).rejects.toThrow(CarterNotFoundError);
      });
  
      it('will correctly handle an Unprocessable Entity Error', async () => {
        mock.onPost('/v0/add-intent').reply(422);
        const carter = new Carter('someKey');
  
        await expect(carter.addIntent({})).rejects.toThrow(CarterUnprocessableEntityError);
      });
  
      it('will correctly handle an Internal Server Error', async () => {
        mock.onPost('/v0/add-intent').reply(500);
        const carter = new Carter('someKey');
  
        await expect(carter.addIntent({})).rejects.toThrow(CarterInternalServerError);
      });
  
      it('will correctly handle another odd error', async () => {
        mock.onPost('/v0/add-intent').reply(543);
        const carter = new Carter('someKey');
  
        await expect(carter.addIntent({})).rejects.toThrow(CarterResponseError);
      });
    });

    describe('Successful Response:', () => {
      it('will return a valid response', async () => {
        mock.onPost('/v0/add-intent').reply(200, null);
        const carter = new Carter('someKey');

        await expect(carter.addIntent({})).resolves.toBe(true);
      });
    });
  });

  describe('Train Custom Model:', () => {
    describe('Error Handling:', () => {
      it('will correctly handle an invalid API Key Error', async () => {
        mock.onPost('/v0/train').reply(200, {error: 'invalid api key'});
        const carter = new Carter('someKey');

        await expect(carter.trainModel(20)).rejects.toThrow(CarterInvalidApiKeyError);
      });

      it('will correctly handle a Forbidden Error', async () => {
        mock.onPost('/v0/train').reply(403);
        const carter = new Carter('someKey');
  
        await expect(carter.trainModel(20)).rejects.toThrow(CarterForbiddenError);
      });
  
      it('will correctly handle a Not Found Error', async () => {
        mock.onPost('/v0/train').reply(404);
        const carter = new Carter('someKey');
  
        await expect(carter.trainModel(20)).rejects.toThrow(CarterNotFoundError);
      });
  
      it('will correctly handle an Unprocessable Entity Error', async () => {
        mock.onPost('/v0/train').reply(422);
        const carter = new Carter('someKey');
  
        await expect(carter.trainModel(20)).rejects.toThrow(CarterUnprocessableEntityError);
      });
  
      it('will correctly handle an Internal Server Error', async () => {
        mock.onPost('/v0/train').reply(500);
        const carter = new Carter('someKey');
  
        await expect(carter.trainModel(20)).rejects.toThrow(CarterInternalServerError);
      });
  
      it('will correctly handle another odd error', async () => {
        mock.onPost('/v0/train').reply(543);
        const carter = new Carter('someKey');
  
        await expect(carter.trainModel(20)).rejects.toThrow(CarterResponseError);
      });
    });

    describe('Successful Response:', () => {
      it('will return a valid response', async () => {
        mock.onPost('/v0/train').reply(200, null);
        const carter = new Carter('someKey');

        await expect(carter.trainModel(20)).resolves.toBe(true);
      });
    });
  });

  describe('Downvote:', () => {
    describe('Error Handling:', () => {
      it('will correctly handle an invalid API Key Error', async () => {
        mock.onPost('/v0/downvote').reply(200, {error: 'invalid api key'});
        const carter = new Carter('someKey');

        await expect(carter.downvote('hello')).rejects.toThrow(CarterInvalidApiKeyError);
      });

      it('will correctly handle a Forbidden Error', async () => {
        mock.onPost('/v0/downvote').reply(403);
        const carter = new Carter('someKey');
  
        await expect(carter.downvote('hello')).rejects.toThrow(CarterForbiddenError);
      });
  
      it('will correctly handle a Not Found Error', async () => {
        mock.onPost('/v0/downvote').reply(404);
        const carter = new Carter('someKey');
  
        await expect(carter.downvote('hello')).rejects.toThrow(CarterNotFoundError);
      });
  
      it('will correctly handle an Unprocessable Entity Error', async () => {
        mock.onPost('/v0/downvote').reply(422);
        const carter = new Carter('someKey');
  
        await expect(carter.downvote('hello')).rejects.toThrow(CarterUnprocessableEntityError);
      });
  
      it('will correctly handle an Internal Server Error', async () => {
        mock.onPost('/v0/downvote').reply(500);
        const carter = new Carter('someKey');
  
        await expect(carter.downvote('hello')).rejects.toThrow(CarterInternalServerError);
      });
  
      it('will correctly handle another odd error', async () => {
        mock.onPost('/v0/downvote').reply(543);
        const carter = new Carter('someKey');
  
        await expect(carter.downvote('hello')).rejects.toThrow(CarterResponseError);
      });
    });

    describe('Successful Response:', () => {
      it('will return a valid response', async () => {
        mock.onPost('/v0/downvote').reply(200, null);
        const carter = new Carter('someKey');

        await expect(carter.downvote('123')).resolves.toBe(true);
      });
    });
  });

  describe('Status:', () => {
    describe('Error Handling:', () => {
        it('will correctly handle an invalid API Key Error', async () => {
          mock.onGet('/status').reply(200, {error: 'invalid api key'});
          const carter = new Carter('someKey');
  
          await expect(carter.status()).rejects.toThrow(CarterInvalidApiKeyError);
        });
  
        it('will correctly handle a Forbidden Error', async () => {
          mock.onGet('/status').reply(403);
          const carter = new Carter('someKey');
    
          await expect(carter.status()).rejects.toThrow(CarterForbiddenError);
        });
    
        it('will correctly handle a Not Found Error', async () => {
          mock.onGet('/status').reply(404);
          const carter = new Carter('someKey');
    
          await expect(carter.status()).rejects.toThrow(CarterNotFoundError);
        });
    
        it('will correctly handle an Unprocessable Entity Error', async () => {
          mock.onGet('/status').reply(422);
          const carter = new Carter('someKey');
    
          await expect(carter.status()).rejects.toThrow(CarterUnprocessableEntityError);
        });
    
        it('will correctly handle an Internal Server Error', async () => {
          mock.onGet('/status').reply(500);
          const carter = new Carter('someKey');
    
          await expect(carter.status()).rejects.toThrow(CarterInternalServerError);
        });
    
        it('will correctly handle another odd error', async () => {
          mock.onGet('/status').reply(543);
          const carter = new Carter('someKey');
    
          await expect(carter.status()).rejects.toThrow(CarterResponseError);
        });
    });

    describe('Successful Response:', () => {
      it('will return a valid response', async () => {
        mock.onGet(`/status`).reply(200, {data: '0.0.4'});
        const carter = new Carter('someKey');
  
        await expect(carter.status()).resolves.toBeTruthy();
      });
    });
  });

  describe('Speak:', () => {
    describe('Error Handling:', () => {
      it('will correctly handle an invalid API Key Error', async () => {
        mock.onGet(`/v0/speak/someKey/hello`).reply(200, {error: 'invalid api key'});
        const carter = new Carter('someKey');

        await expect(carter.speak('hello')).rejects.toThrow(CarterInvalidApiKeyError);
      });

      it('will correctly handle a Forbidden Error', async () => {
        mock.onGet('/v0/speak/someKey/hello').reply(403);
        const carter = new Carter('someKey');
  
        await expect(carter.speak('hello')).rejects.toThrow(CarterForbiddenError);
      });
  
      it('will correctly handle a Not Found Error', async () => {
        mock.onGet(`/v0/speak/someKey/hello`).reply(404);
        const carter = new Carter('someKey');
  
        await expect(carter.speak('hello')).rejects.toThrow(CarterNotFoundError);
      });
  
      it('will correctly handle an Unprocessable Entity Error', async () => {
        mock.onGet(`/v0/speak/someKey/hello`).reply(422);
        const carter = new Carter('someKey');
  
        await expect(carter.speak('hello')).rejects.toThrow(CarterUnprocessableEntityError);
      });
  
      it('will correctly handle an Internal Server Error', async () => {
        mock.onGet(`/v0/speak/someKey/hello`).reply(500);
        const carter = new Carter('someKey');
  
        await expect(carter.speak('hello')).rejects.toThrow(CarterInternalServerError);
      });
  
      it('will correctly handle another odd error', async () => {
        mock.onGet(`/v0/speak/someKey/hello`).reply(543);
        const carter = new Carter('someKey');
  
        await expect(carter.speak('hello')).rejects.toThrow(CarterResponseError);
      });
    });

    describe('Successful Response:', () => {
      it('will return an audio file content directly', async () => {
        const audioFile = fs.readFileSync(__dirname + '/fixtures/hello.wav');
        mock.onGet(`/v0/speak/someKey/hello`).reply(200, audioFile);
        const carter = new Carter('someKey');
  
        await expect(carter.speak('hello')).resolves.toBeInstanceOf(Buffer);
      });
    });
  });
});

