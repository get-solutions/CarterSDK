const IntentBuilder = require("../../Builders/IntentBuilder");

describe('Intent Builder:', () => {
  it('will allow you to chain entries', () => {
    const intent = new IntentBuilder();

    const result = intent.setTag('testTag')
      .setSkill('testSkill')
      .setHoldingResponse('testHoldingResponse')
      .addPattern('testPattern1')
      .addPattern('testPattern2')
      .addResponse('testResponse1')
      .addResponse('testResponse2')
      .addRequirement('testRequirement1')
      .addRequirement('testRequirement2')
      .build();

    const expected = {
      tag: 'testTag',
      skill: 'testSkill',
      holding_response: 'testHoldingResponse',
      patterns: [
        'testPattern1',
        'testPattern2',
      ],
      responses: [
        'testResponse1',
        'testResponse2',
      ],
      requirements: [
        'testRequirement1',
        'testRequirement2',
      ],
    };

    expect(result).toStrictEqual(expected);
  });
});
