import { Request, Response, NextFunction } from 'express';

export const authorizationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    return res.status(403).send('login once');
  }
  next();
};
