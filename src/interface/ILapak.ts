import { Types } from 'mongoose';

export interface ILapak {
  _id: Types.ObjectId | Record<string, unknown>;
  namaKelompok: string;
  namaLapak: string;
  slugName: string;
  penanggungJawab: string;
  deskripsi: string;
  logo: string;
  isSuspended: Boolean;
  createdAt: Date;
  deletedAt: Date | null;
  updatedAt: Date | null;
  isValidPassword: (password: string) => Promise<boolean>;
}
