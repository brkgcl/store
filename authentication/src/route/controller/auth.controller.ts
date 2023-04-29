import express, { Request, Response, NextFunction } from 'express';
import { User, UserAttrs } from '../../model/user.model';
import { Password } from '../../model/psswd/password.service';
import {
  validationResultController,
  saveUserCookie,
} from '../../utills/helperfunction';

export const authController = {
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    await validationResultController(req, res);
    await User.findOne({ email: email })
      .then(async (__user) => {
        if (!__user) res.status(401).send('User not found');
        else if (!(await Password.toMatch(__user!.password, password)))
          res.send(`Wrong Password`);
        else {
          saveUserCookie(__user!.email, __user!.id, req);
          res.send(__user);
        }
      })
      .catch((err) => {
        throw new Error('505 Login Error: ' + err.message);
      });
  },

  register: async (req: Request, res: Response) => {
    await validationResultController(req, res);
    const userData: UserAttrs = req.body;
    await User.findOne({ email: userData.email })
      .then(async (__user) => {
        if (__user) res.status(402).send('User already registered');
        else {
          const __newuser = await User.build(userData);
          await saveUserCookie(__newuser.email, __newuser.id, req);
          res.json(__newuser);
        }
      })
      .catch((err) => {
        throw new Error('505 Register Error: ' + err.message);
      });
  },

  currentUser: async (req: Request, res: Response) => {
    res.send({ currentUser: req.currentUser || null });
  },

  logout: async (req: Request, res: Response) => {
    req.session = null;
    res.send('logout');
  },
};
