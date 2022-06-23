import { Types } from 'mongoose';

export interface IProduk {
  gambar: string[];
  nama: string;
  minimalPembelian: number;
  harga: number;
  satuan: string;
  deskripsi: string;
  lapak: Types.ObjectId | Record<string, unknown>;
  isSuspended: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}
