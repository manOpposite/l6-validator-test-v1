export default class ObjectSchema {
  constructor(schema) {
    this.schema = schema;
  }

  shape(obj) {
    return new ObjectSchema(obj);
  }

  isValid(value) {
    const keys1 = Object.keys(this.schema);
    const keys2 = Object.keys(value);
    if (keys2.length !== keys1.length) return false;
    return keys1.every((key) => {
      if (
        typeof value[key] === 'object'
            && !Array.isArray(value[key])
            && value[key] !== null
      ) {
        const schema = new ObjectSchema(this.schema[key]);
        return schema.isValid(value[key]);
      }
      return this.schema[key].isValid(value[key]);
    });
  }
}

//   isValid(value) {
//     const keys1 = Object.keys(this.schema);
//     const keys2 = Object.keys(value);
//     if (keys2.length !== keys1.length) return false;
//     return keys1.every((key) => this.schema[key].isValid(value[key]));
//   }
// }
