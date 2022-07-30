const axios = require('./axios.instance');
const CarterError = require('./Errors/CarterError');
const CarterInvalidApiKeyError = require('./Errors/CarterInvalidApiKeyError');
const ResponseErrorHandler = require('./Handlers/ResponseErrorHandler');
const { randomUUID } = require('crypto');
const ChatResponseTransformer = require('./Transformers/ChatResponseTransformer');

class Carter {
  #apiKey;
  #version = '/v0';

  constructor(apiKey) {
    this.#apiKey = apiKey;
  }

  #handleError(error) {
    if (error.response) {
      throw (new ResponseErrorHandler(error.response)).handle();
    }

    if (error.request) {
      throw (new RequestErrorHandler(error.request)).handle();
    }

    throw new CarterError('Request Exception not understood');
  }

  async chat(message) {
    const data = {
      query: message,
      uuid: randomUUID(),
      api_key: this.#apiKey,
    };

    try {
      let response = await axios.post(`${this.#version}/chat`, data)
      if (response.data.error) {
        if (response.data.error === 'invalid api key') {
          throw new CarterInvalidApiKeyError();
        }
      }

      let audio;
      
      try {
        audio = await this.speak(response.data.output.text);
      } catch (e) {
        audio = null;
      }

      return (new ChatResponseTransformer(response, audio)).transform();
    } catch (e) {
      if (e instanceof CarterInvalidApiKeyError) {
        throw e;
      }
      throw this.#handleError(e);
    }
  }

  async downvote(tid) {
    return await axios.post(`/v0/downvote`, {api_key: this.#apiKey, tid: tid})
      .then(response => {
        if (response?.data?.error) {
          if (response?.data?.error === 'invalid api key') {
            throw new CarterInvalidApiKeyError();
          }
        }
        
        return true;
      })
      .catch((e) => {
        if (e instanceof CarterInvalidApiKeyError) {
          throw e;
        }

        throw this.#handleError(e);
      });
  }

  async status() {
    return await axios.get(`/status`)
      .then(data => data)
      .catch((e) => {
        if (e instanceof CarterInvalidApiKeyError) {
          throw e;
        }

        throw this.#handleError(e);
      });
  }

  async speak(value) {
    return axios.get(
      `${this.#version}/speak/${this.#apiKey}/${value}`,
      {
        responseType: 'arraybuffer',
        headers: {
          'Accept': 'audio/x-wav'
        }
      }
    )
      .then(response => {
        if (response.data.error) {
          if (response.data.error === 'invalid api key') {
            throw new CarterInvalidApiKeyError();
          }
        }
        
        return response.data;
      }).catch((e) => {
        if (e instanceof CarterInvalidApiKeyError) {
          throw e;
        }
        throw this.#handleError(e);
      });
  }
}

module.exports = Carter;