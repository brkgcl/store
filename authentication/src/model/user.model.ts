import mongoose, { ObjectId } from 'mongoose';
import { Password } from './psswd/password.service';

export interface UserAttrs {
  _id?: ObjectId;
  name: string;
  surname: string;
  email: string;
  password: string;
  phone_number: string;
  status?: boolean;
  profile_image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserModel extends mongoose.Model<UserDoc> {
  CreateUser(attrs: UserAttrs): Promise<UserDoc>;
}

export interface UserDoc extends mongoose.Document {
  _id?: ObjectId;
  name: string;
  surname: string;
  email: string;
  password: string;
  phone_number: number;
  status?: boolean;
  profile_image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema: mongoose.Schema = new mongoose.Schema(
  {
    name: { required: true, type: String },
    surname: { required: true, type: String },
    email: { required: true, type: String },
    password: { required: true, type: String },
    phone_number: { required: true, type: Number },
    status: { type: Boolean, default: false },
    profile_image: { type: String, default: 'logo.png' },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: 'UserAuthenticationSchema',
  }
);

UserSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

// UserDoc.ok(UserDoc instanceof Promise)

UserSchema.statics.CreateUser = async (attrs: UserAttrs) => {
  try {
    const newUser = new User(attrs);
    await newUser.save();
    return newUser;
  } catch (err) {
    throw err;
  }
};

const User = mongoose.model<UserDoc, UserModel>('User', UserSchema);
export { User };

/**
 * const gnr = new Band({
  name: 'Guns N\' Roses',
  members: ['Axl', 'Slash']
});

const promise = gnr.save();
assert.ok(promise instanceof Promise);

promise.then(function(doc) {
  assert.equal(doc.name, 'Guns N\' Roses');
});

 */

// Moongoose kullanarak aşşağıdaki gibi bir interface oluşturdum

// interface UserDoc extends mongoose.Document {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
//   phone_number: number;
//   status?: boolean;
// }

// Daha sonra aşşağıdaki static method u tanımladım.

// UserSchema.statics.CreateUser = async (attrs: UserAttrs) => {
//   const newUser = new User(attrs);
//   await newUser.save();
//   return Promise.resolve(newUser);
// };

// oluşturduğum CreateUser methodunu promise olarak nasıl kullanabilirim
