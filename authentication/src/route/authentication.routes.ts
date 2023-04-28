import express, { Request, Response } from 'express';
import { authController } from './controller/auth.controller';
const router = express.Router();
import { check } from 'express-validator';

router.post(
  '/login',
  [
    check('email').optional().trim().isEmail().withMessage('You must be valid'),
    check('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
  ],
  authController.login
);
router.post(
  '/register',
  [
    check('name')
      .isLength({ min: 3 })
      .isString()
      .withMessage('name number must be valid'),
    check('surname')
      .isLength({ min: 3 })
      .isString()
      .withMessage('surname number must be valid'),
    check('email').optional().trim().isEmail().withMessage('You must be valid'),
    check('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
    check('phone_number')
      .isLength({ min: 10 })
      .isNumeric()
      .withMessage('Phone number must be valid'),
  ],
  authController.register
);
router.post('/logout', authController.logout);

export { router as AuthenticationRouter };
