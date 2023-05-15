import express from 'express';
const router = express.Router();
import { AuthenticationController } from './controller/authentication.controller';
import { currentUserMiddleware } from '../middleware/currentuser.middleware';
import {
  loginValidation,
  registerValidation,
} from '../validations/usthentication.validations';
import { validationMiddleware } from '../middleware/validation.middleware';

import { upload } from '../config/fileupload.config';

router
  .route('/login')
  .post(validationMiddleware(loginValidation), AuthenticationController.login);
router
  .route('/register')
  .post(
    upload.single('profil_image'),
    validationMiddleware(registerValidation),
    AuthenticationController.register
  );
router.route('/logout').post(AuthenticationController.logout);
router
  .route('/currentuser')
  .get(currentUserMiddleware, AuthenticationController.currentuser);

export { router as UserAuthenticationRouter };
