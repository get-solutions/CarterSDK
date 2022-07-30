class IntentBuilder {
  #tag;
  #patterns = [];
  #responses = [];
  #skill;
  #holdingResponse;
  #requirements = [];

  setSkill(skill) {
    this.#skill = skill;
    return this;
  }

  setTag(tag) {
    this.#tag = tag;
    return this;
  }

  setHoldingResponse(holdingResponse) {
    this.#holdingResponse = holdingResponse;
    return this;
  }

  addPattern(pattern) {
    this.#patterns.push(pattern);
    return this;
  }


  addResponse(response) {
    this.#responses.push(response);
    return this;
  }

  addRequirement(requirement) {
    this.#requirements.push(requirement);
    return this;
  }

  build() {
    return {
      tag: this.#tag,
      patterns: this.#patterns,
      responses: this.#responses,
      skill: this.#skill,
      holding_response: this.#holdingResponse,
      requirements: this.#requirements,
    }
  }
}

module.exports = IntentBuilder;
