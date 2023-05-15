import mongoose, { Document, Model, Schema, ObjectId } from 'mongoose';
import { Password } from '../model/psswd/password.service';

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

interface LoginUser {
  email: string;
  password: string;
}

class AuthenticationService {
  private userModel: Model<IUser>;

  constructor(userModel: Model<IUser>) {
    this.userModel = userModel;
  }

  async loginUser(
    email: string,
    password: string
  ): Promise<IUser | Error | { message: string }> {
    try {
      const user = await this.userModel.findOne({ email });
      if (!user) return { message: 'User not found' };
      const isPasswordMatched = await Password.toMatch(
        user!.password,
        password
      );
      if (!isPasswordMatched) return { message: 'Password mismatch' };
      return user;
    } catch (error) {
      throw new Error('Failed to login user');
    }
  }
  async createUser(
    payload: IUser
  ): Promise<IUser | Error | { message: string }> {
    try {
      const confirmUser = await this.userModel.findOne({
        email: payload.email,
      });
      if (confirmUser) return { message: 'User already registered' };
      const user = new this.userModel(payload);
      await user.save();
      return user;
    } catch (error) {
      throw new Error('Failed to create user');
    }
  }

  async getUsers(): Promise<IUser[]> {
    try {
      const users = await this.userModel.find();
      return users;
    } catch (error) {
      throw new Error('Failed to get users');
    }
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    try {
      const user = await this.userModel.findOne({ email });
      return user;
    } catch (error) {
      throw new Error('Failed to get user by email');
    }
  }
}

export { AuthenticationService };
