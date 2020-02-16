import Router from 'koa-router';
import healthController from 'health/controllers';

const router = new Router();

// Register controllers.
healthController(router);

export default router;
