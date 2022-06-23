import { Types } from 'mongoose';

export interface IRequestCreateInvoiceGuest {
  guestId: string;
  dataPembeli: {
    nama: string;
    type: string;
  };
  metodePembelian: string;
  lapak: any;
  produk: {
    id: any;
    qty: number;
  }[];
}

export interface IInvoice {
  _id: Types.ObjectId | Record<string, unknown>;
  guestId: string;
  namaPembeli: string;
  typePembeli: string;
  metodePembelian: string;
  produk: {
    id: any;
    qty: number;
  }[];
  status: string;
  invoiceNumber: number;
  lapak: any;
  createdAt: Date;
  deletedAt: Date | null;
  updatedAt: Date | null;
}
