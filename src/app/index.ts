import Koa from 'koa';
import bodyParser from 'koa-bodyparser'
import errorMiddleware from 'app/middlewares/error-middleware'
import router from 'router';

const app = new Koa();

app.use(errorMiddleware);
app.use(bodyParser());
app.use(router.routes());

export default app;
