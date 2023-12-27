import ArraySchema from './ArraySchema.js';
import NumberSchema from './NumberSchema.js';
import ObjectSchema from './ObjectSchema.js';

export default class Validator {
  number() {
    return new NumberSchema();
  }

  //  array() {
  //     return new ArraySchema();
  //   }
  array() {
    const validator = (value) => Array.isArray(value);
    return new ArraySchema([validator]);
  }

  object() {
    return new ObjectSchema();
  }
}
