import { Types } from 'mongoose';

export interface IPelapak {
  _id: Types.ObjectId | Record<string, unknown>;
  nama: string;
  lapak: Types.ObjectId | Record<string, unknown>;
  email: string;
  password: string | null;
  token: string | null;
  noTelfon: string;
  createdAt: Date;
  deletedAt: Date | null;
  updatedAt: Date | null;
  isValidPassword: (password: string) => Promise<boolean>;
}
