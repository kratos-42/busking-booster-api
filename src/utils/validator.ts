import Ajv from 'ajv';
import createError from 'http-errors';

const ajv = new Ajv();

export default (schema: object, data: object): void | Error => {
  const validate = ajv.compile(schema);
  const valid = validate(data);

  if (!valid) {
    throw new createError.BadRequest(JSON.stringify(validate.errors));
  }
}
