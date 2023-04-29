import { check } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../environment/development.config';

// Type declarations
interface UserPayload {
  id: string;
  email: string;
}
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

//Validation functions
export const AuthenticatonValidatior = {
  loginValidator: [
    check('email').optional().trim().isEmail().withMessage('You must be valid'),
    check('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
  ],
  registerValidator: [
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
  currentUserValidatior: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.session?.jwt) {
      return next();
    }

    try {
      req.currentUser = (await jwt.verify(
        req.session.jwt,
        config.jwt_key
      )) as UserPayload;
    } catch (error) {}

    next();
  },
};
