import { Request, Response, NextFunction } from 'express';
import { User } from '../../model/User.model';

export const UserController = {
  allUser: async (req: Request, res: Response) => {
    await User.find()
      .then((item) => {
        res.status(200).send(item);
      })
      .catch((err) => res.status(500).send('Sever error: '));
  },
  getUser: async (req: Request, res: Response) => {
    const _id = req.params.id;
    await User.findOne({ _id })
      .then((item) => {
        if (!item) res.status(404).send('User not found');
        res.status(200).send(item);
      })
      .catch((err) => res.status(500).send('Sever error: '));
  },
  getImage: async (req: Request, res: Response) => {
    res.send('get image');
  },
  changePassword: async (req: Request, res: Response) => {
    res.send('get image');
  },
  updateUser: async (req: Request, res: Response) => {
    res.send('get image');
  },
};
