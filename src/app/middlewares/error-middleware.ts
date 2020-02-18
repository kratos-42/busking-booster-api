import { Context, Next } from 'koa';

export default async (ctx: Context, next: Next): Promise<void> => {
  try {
    await next();
  } catch (error) {
      ctx.status = error.status || 500;
      ctx.body = error.message;
      ctx.app.emit('error', error, ctx);
  }
}
