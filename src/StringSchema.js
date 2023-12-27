class StringSchema {

    constructor(validators) {
        this.validators = validators ? [...validators] : [];
    }

    isValid(value) {
        return this.validators.every((v) => v(value));
    }
}

export default StringSchema;
