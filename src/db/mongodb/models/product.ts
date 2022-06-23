import { Document, model, Schema } from 'mongoose';
import { IProduk } from '../../../interface/IProduk';

export type ProdukDocument = Document & IProduk;
const ProdukSchema: Schema<ProdukDocument> = new Schema({
  gambar: [
    {
      type: String,
    },
  ],
  nama: { type: String, required: true },
  minimalPembelian: { type: Number, default: 1 },
  harga: { type: Number },
  satuan: { type: String },
  deskripsi: { type: String },
  lapak: { type: Schema.Types.ObjectId, ref: 'Lapak' },
  isSuspended: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  deletedAt: { type: Date },
});

const Product = model<ProdukDocument>('Product', ProdukSchema);
export default Product;
