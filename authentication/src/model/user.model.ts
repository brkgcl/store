import mongoose from 'mongoose';
import { Password } from './psswd/password.service';

export interface UserAttrs {
  name: string;
  surname: string;
  email: string;
  password: string;
  phone_number: number;
  status: boolean;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

interface UserDoc extends mongoose.Document {
  name: string;
  surname: string;
  email: string;
  password: string;
  phone_number: number;
  status: boolean;
}

const userSchema: mongoose.Schema = new mongoose.Schema(
  {
    name: { required: true, type: String },
    surname: { required: true, type: String },
    email: { required: true, type: String },
    password: { required: true, type: String },
    phone_number: { required: true, type: Number },
    status: { type: Boolean, default: false },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
    collection: 'authentication',
  }
);

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

userSchema.statics.build = async (attrs: UserAttrs) => {
  const newUser = new User(attrs);
  await newUser.save();
  return newUser;
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);
export { User };

/**
 * import bcrypt from 'bcrypt';
 * interface EncryptPassword {
  (encryptPassword: string): Promise<string>;
}
interface Authenticate {
  (plainTextPassword: string): Promise<boolean>;
}

interface UserType extends mongoose.Document {
  usernname: string;
  password: string;
  encryptPassword: EncryptPassword;
  authenticate: Authenticate;
}
 * UserSchema.methods = {
  async authenticate(plainTextPassword: string): Promise<boolean> {
    try {
      return await bcrypt.compare(plainTextPassword, this.password);
    } catch (err) {
      return false;
    }
  },
  encryptPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 8);
  },
};
 */
