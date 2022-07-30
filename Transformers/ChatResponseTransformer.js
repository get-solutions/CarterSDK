const ChatResponse = require('../Responses/ChatResponse');

class ChatResponseTransformer {
  #response;
  #audio;

  constructor(response, audio) {
    this.#response = response.data;
    this.#audio = audio;
  }

  transform() {
    return new ChatResponse(
      this.#response.input,
      this.#response.triggers,
      this.#response.isQuestion,
      this.#response.sentiment,
      this.#response.time_taken,
      this.#response.credits_used,
      this.#response.tid,
      this.#response.output.text,
      this.#audio
    );
  }
}

module.exports = ChatResponseTransformer;
