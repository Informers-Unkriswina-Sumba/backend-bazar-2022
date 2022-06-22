import { Types } from 'mongoose';

export interface IUser {
  _id: Types.ObjectId | Record<string, unknown>;
  name: string;
  email: string;
  password: string | null;
  token: string | null;
  created_at: Date;
  deleted_at: Date | null;
  updated_at: Date | null;
  isValidPassword: (password: string) => Promise<boolean>;
}
