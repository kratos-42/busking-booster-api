import Ajv from 'ajv';
import createError from 'http-errors';
import customErrors from 'ajv-errors';

// Ajv options allErrors and jsonPointers are required for custom errors plugin.
const ajv = new Ajv({ allErrors: true, jsonPointers: true });

customErrors(ajv);

export default (schema: object, data: object): void | Error => {
  const validate = ajv.compile(schema);
  const valid = validate(data);

  if (!valid && validate.errors) {
    console.log(validate.errors);

    throw createError(
      400,
      'Validation error',
      { properties: validate.errors }
    );
  }
};
