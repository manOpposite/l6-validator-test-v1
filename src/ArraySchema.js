export default class ArraySchema {
  //  validators = [(value) => Array.isArray(value)];
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(array) {
    return this.validators.every((validator) => validator(array));
  }

  allIntegers() {
    const validator = (array) => array.every((item) => {
      if (!Number.isInteger(item)) {
        return false;
      }
      return true;
    });
    // this.validators.push(validator);
    // return this;
    return new ArraySchema([...this.validators, validator]);
  }

  custom(condition) {
    const validator = (value) => value.every(condition);
    // this.validators.push(validator);
    // return this;
    return new ArraySchema([...this.validators, validator]);
  }
}
