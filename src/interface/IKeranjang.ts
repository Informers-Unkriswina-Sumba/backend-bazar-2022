import { Types } from 'mongoose';

export interface IKeranjang {
  _id: Types.ObjectId | Record<string, unknown>;
  guestId: String;
  productId: Types.ObjectId | Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}
