class StringSchema {
  constructor(validators) {
    this.validators = validators ? [...validators] : [];
  }

  isValid(value) {
    return this.validators.every((v) => v(value));
  }

  hasSpaces() {
    return new StringSchema([...this.validators, (v) => v.indexOf(' ') >= 0]);
  }
}

export default StringSchema;
