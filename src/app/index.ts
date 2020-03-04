import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import debugnyan from 'debugnyan';
import errorMiddleware from 'app/middlewares/error-middleware';
import router from 'router';

// Create logger.
const logger = debugnyan('busking-booster:app');
const app = new Koa();

// Log on error.
app.on('error', error => {
  logger.debug(error);
});

app.use(errorMiddleware);
app.use(bodyParser());
app.use(router.routes());

export default app;
