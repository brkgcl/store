import express from 'express';
const router = express.Router();
import { UserController } from './controller/user.controller';
import { authorizationMiddleware } from '../middleware/authorization.middleware';

router.route('/users').get(authorizationMiddleware, UserController.allUser);
router.route('/users/:id').get(authorizationMiddleware, UserController.getUser);
router
  .route('/users/image/:image_id')
  .get(authorizationMiddleware, UserController.getImage);
router
  .route('/users/change_password/:id')
  .post(authorizationMiddleware, UserController.changePassword);
router
  .route('/users/update/')
  .post(authorizationMiddleware, UserController.updateUser);

export { router as UserRouter };
