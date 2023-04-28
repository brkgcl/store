import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../environment/development.config';
import { validationResult } from 'express-validator';

export async function saveUserCookie(email: string, id: string, req: Request) {
  const payload = {
    user: {
      id,
      email,
    },
  };
  const token: string = jwt.sign(payload, config.jwt_key, {
    expiresIn: 360000,
  });
  req.session = { jwt: token };
}

export const validationResultController = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
};
