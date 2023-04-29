import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../environment/development.config';
import { validationResult } from 'express-validator';

export async function saveUserCookie(email: string, id: string, req: Request) {
  const token: string = jwt.sign({ user: { id, email } }, config.jwt_key, {
    expiresIn: 360000,
  });
  req.session = { jwt: token };
}

export interface userPayload {
  id: string;
  email: string;
}

export async function checkUser(req: Request) {
  const token = req.session?.jwt;
  const error = 'token not valid';
  if (!token) {
    return error;
  }
  const payload = (await jwt.verify(token, config.jwt_key)) as userPayload;
  return payload;
}

export const validationResultController = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
};
