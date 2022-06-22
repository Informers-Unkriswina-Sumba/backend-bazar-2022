import { Schema, model, Model } from 'mongoose';
import bcrypt from 'bcrypt';
import { IUser } from '../interface/IUser';
import { ROUNDED_SALT_BCRYPT } from '../config';

/**
 * Not directly exported because it is not recommanded to
 * use this interface direct unless necessary since the
 * type of `company` field is not deterministic
 */
export type UserDocument = Document & IUser;

// For model
interface IUserModel extends Model<UserDocument> {
  findByUsername: (username: string) => Promise<UserDocument>;
  findByEmail: (email: string) => Promise<UserDocument>;
}

// Create a Schema corresponding to the document interface.
const UserSchema: Schema<UserDocument> = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  token: {
    type: String,
    default: null,
  },
  password: {
    type: String,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
  deleted_at: {
    type: Date,
    default: null,
  },
  updated_at: {
    type: Date,
    default: null,
  },
});

// Document middlewares
// UserSchema.pre('save', async function (this: UserDocument, next) {
//   console.log('this.password', this.password);
//   const hash = await bcrypt.hash(this.password, ROUNDED_SALT_BCRYPT);
//   this.password = hash;
//   next();
// });

// Methods
UserSchema.methods.isValidPassword = async function (
  this: UserDocument,
  password: string
): Promise<boolean> {
  const compare = await bcrypt.compare(password, this.password);
  return compare;
};

// Hide password field
UserSchema.set('toJSON', {
  transform: function (doc, ret, opt) {
    delete ret['password'];
    return ret;
  },
});

const User = model<UserDocument, IUserModel>('User', UserSchema);
export default User;
