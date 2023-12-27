import FunctionSchema from './FunctionSchema.js';
import ObjectSchema from './ObjectSchema.js';
import StringSchema from './StringSchema.js';

class Validator {
  string() {
    return new StringSchema([(v) => typeof v === 'string']);
  }

  function() {
    return new FunctionSchema();
  }

  object() {
    return new ObjectSchema([(v) => typeof v === 'object']);
  }
}

export default Validator;
