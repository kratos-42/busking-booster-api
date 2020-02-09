import app from 'app';
import request from 'supertest';

export default ((): request.SuperTest<request.Test> => {
  return request(app.callback());
})();
