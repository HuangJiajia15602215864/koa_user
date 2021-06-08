import Router from '@koa/router';

import AuthController from './controllers/auth';
import UserController from './controllers/user';

// auth 相关的路由
const unprotectedRouter = new Router();
unprotectedRouter.post('/auth/login', AuthController.login);
unprotectedRouter.post('/auth/register', AuthController.register);

// users 相关的路由
const protectedRouter = new Router();
protectedRouter.get('/users', UserController.listUsers);
protectedRouter.get('/users/:id', UserController.showUserDetail);
protectedRouter.put('/users/:id', UserController.updateUser);
protectedRouter.delete('/users/:id', UserController.deleteUser);

export { protectedRouter, unprotectedRouter };