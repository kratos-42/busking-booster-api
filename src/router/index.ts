import Router from 'koa-router';
import healthController from 'health/controllers';
import userController from 'user/controllers/user-controller';

const router = new Router();

// Register controllers.
healthController(router);
userController(router);

export default router;
