import Router from 'koa-router';

export default (router: Router): void => {
  router.get('/health', '/health', ctx => {
    ctx.body = { message: 'OK' };
  });
};
