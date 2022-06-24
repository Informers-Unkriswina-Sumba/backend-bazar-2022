import { Types } from 'mongoose';

export interface IPenilaianAnggota {
  _id: Types.ObjectId | Record<string, unknown>;
  guestId: string;
  nim: string;
  description: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}
