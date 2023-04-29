import express, { Request, Response, Router } from 'express';
import { authController } from './controller/auth.controller';
const router = express.Router();
import { AuthenticatonValidatior } from '../middleware/validation.middleware';

router.post(
  '/login',
  AuthenticatonValidatior.loginValidator,
  authController.login
);
router.post(
  '/register',
  AuthenticatonValidatior.registerValidator,
  authController.register
);
router.get(
  '/currentuser',
  AuthenticatonValidatior.currentUserValidatior,
  authController.currentUser
);

router.post('/logout', authController.logout);

export { router as AuthenticationRouter };
