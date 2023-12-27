import StringSchema from './StringSchema.js';

class Validator {
  string() {
    return new StringSchema([(v) => typeof v === 'string']);
  }
}

export default Validator;
