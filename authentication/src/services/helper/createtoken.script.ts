import { Request, Response, NextFunction, request } from 'express';
import jwt from 'jsonwebtoken';
import async from 'async';
import { ObjectId, Types } from 'mongoose';

interface CookiePayload {
  id: ObjectId;
  email: string;
}

export const createToken = (id: number, email: string) => {
  const token: string = jwt.sign({ id, email }, process.env.JWT_KEY || 'brk', {
    expiresIn: 360000,
  });
  return { jwt: token };
};
