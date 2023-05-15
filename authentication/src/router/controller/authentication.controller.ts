import { Request, Response, NextFunction } from 'express';
import { User, UserAttrs } from '../../model/User.model';
import { createToken } from '../../services/helper/createtoken.script';
import {
  AuthenticationService,
  IUser,
} from '../../services/authentication.service';

interface UserInterface {
  email: string;
  password: string;
}

const authService = new AuthenticationService(User);
export const AuthenticationController = {
  login: async (req: Request, res: Response) => {
    try {
      const { email, password }: UserAttrs = req.body;
      const user = await authService.loginUser(email, password);
      if ('message' in user)
        return res.status(200).send({ message: user.message });
      req.session = await createToken(user.id, user.email);
      return res.status(200).send(user);
    } catch (error) {
      return res.status(500).send({ message: 'Internal Server Error' });
    }
  },

  register: async (req: Request, res: Response) => {
    const user: IUser = req.body;
    user.profile_image = `http://localhost:${process.env.PORT || 3001}/${
      req.file?.filename
    }`;

    const newUser = await authService.createUser(user);

    if ('message' in newUser) return res.status(400).send(newUser);
    req.session = await createToken(user.id, user.email);
    res.status(202).send(newUser);
  },

  logout: async (req: Request, res: Response) => {
    req.session = null;
    res.status(203).send('logout');
  },

  currentuser: (req: Request, res: Response) => {
    res.send({ currentUser: req.currentUser || null });
  },
};

/**
 export interface IUser extends Document {
  _id?: ObjectId;
  name: string;
  surname: string;
  email: string;
  password: string;
  phone_number: number;
  status?: boolean;
  profil_image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}


    const user: IUser = req.body;
    user.profil_image = req.files ? req.file?.filename : 'logo.png';
    const newUser = await authService.createUser(user); 

    bu şekilde mongoya kayıt etmeyi denediğim zaman profil_imagı kayıt etmiyor sorun ne

 */
