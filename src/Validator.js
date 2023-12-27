import FunctionSchema from './FunctionSchema.js';
import StringSchema from './StringSchema.js';

class Validator {
  string() {
    return new StringSchema([(v) => typeof v === 'string']);
  }

  function() {
    return new FunctionSchema();
  }
}

export default Validator;
