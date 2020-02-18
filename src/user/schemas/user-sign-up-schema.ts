export default {
  additionalProperties: false,
  properties: {
    email: {
      format: 'email',
      type: 'string'
    },
    password: {
      pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_!@#\\$%\\^&\\*])(?=.{8,})',
      type: 'string'
    }
  }
}
