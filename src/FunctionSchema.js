class FunctionSchema {
  constructor(callContext, parameters, expectedResult) {
    this.callContext = callContext;
    this.parameters = parameters || [];
    this.expectedResult = expectedResult;
  }

  isValid(value) {
    if (typeof value !== 'function') return false;
    if (this.expectedResult === undefined) return true;
    const result = value.call(this.callContext, ...this.parameters);
    return this.expectedResult === result;
  }

  callWith(callContext) {
    return new FunctionSchema(callContext, this.parameters, this.expectedResult);
  }

  expect(expectedResult) {
    return new FunctionSchema(this.callContext, this.parameters, expectedResult);
  }
}

export default FunctionSchema;
