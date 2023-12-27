class FunctionSchema {
  constructor(callContext, parameters, expectedResult) {
    this.callContext = callContext;
    this.parameters = parameters ? [...parameters] : [];
    this.expectedResult = expectedResult;
  }

  isValid(value) {
    if (typeof value !== 'function') return false;
    if (this.expectedResult === undefined) return true;
    try {
      return value.call(this.callContext, this.parameters) === this.expectedResult;
    } catch {
      return false;
    }
  }

  callWith(callContext) {
    return new FunctionSchema(callContext, this.parameters, this.expectedResult);
  }

  expect(expectedResult) {
    return new FunctionSchema(this.callContext, this.parameters, expectedResult);
  }

  arguments(parameters) {
    return new FunctionSchema(this.callContext, parameters, this.expectedResult);
  }
}

export default FunctionSchema;
