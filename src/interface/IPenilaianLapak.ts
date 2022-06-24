import { Types } from 'mongoose';

export interface IPenilaianLapak {
  _id: Types.ObjectId | Record<string, unknown>;
  guestId: string;
  lapakId: Types.ObjectId | Record<string, unknown>;
  rating: number;
  description: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}
