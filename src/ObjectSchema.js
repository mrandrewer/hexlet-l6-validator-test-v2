class ObjectSchema {
  constructor(validators) {
    this.validators = validators ? [...validators] : [];
  }

  isValid(value) {
    return this.validators.every((v) => v(value));
  }

  shape(schema) {
    const isPlainObject = (o) => o?.constructor === Object;
    const iter = (val, sh) => {
      const oKeys = Object.keys(val);
      return Object.keys(sh).every((k) => {
        if (!oKeys.includes(k)) return false;
        if (!isPlainObject(sh[k])) {
          return sh[k].isValid(val[k]);
        }
        return iter(val[k], sh[k]);
      });
    };
    const validator = (v) => iter(v, schema);
    return new ObjectSchema([...this.validators, validator]);
  }
}

export default ObjectSchema;
