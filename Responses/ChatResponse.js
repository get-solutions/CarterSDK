class ChatResponse {
  #yourRequest;
  #triggers;
  #isQuestion;
  #sentiment;
  #timeTaken;
  #creditsUsed;
  #tid;
  #responseText;
  #audio;
  
  constructor(
    yourRequest,
    triggers,
    isQuestion,
    sentiment,
    timeTaken,
    creditsUsed,
    tid,
    responseText,
    audio
  ) {
    this.#yourRequest = yourRequest;
    this.#triggers = triggers;
    this.#isQuestion = isQuestion;
    this.#sentiment = sentiment;
    this.#timeTaken = timeTaken;
    this.#creditsUsed = creditsUsed;
    this.#tid = tid;
    this.#responseText = responseText;
    this.#audio = audio;
  }

  yourRequest() {
    return this.#yourRequest;
  }

  triggers() {
    return this.#triggers;
  }

  isQuestion() {
    return this.#isQuestion;
  }

  sentiment() {
    return this.#sentiment;
  }

  timeTaken() {
    return this.#timeTaken;
  }

  creditsUsed() {
    return this.#creditsUsed;
  }

  tid() {
    return this.#tid;
  }

  responseText() {
    return this.#responseText;
  }

  responseAudio() {
    return this.#audio;
  }

  toObject() {
    return {
      yourRequest: this.#yourRequest,
      triggers: this.#triggers,
      isQuestion: this.#isQuestion,
      sentiment: this.#sentiment,
      timeTaken: this.#timeTaken,
      creditsUsed: this.#creditsUsed,
      tid: this.#tid,
      responseText: this.#responseText,
      audio: this.#audio,
    }
  }
}

module.exports = ChatResponse;
