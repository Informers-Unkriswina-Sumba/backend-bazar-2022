import { Document, model, Schema } from 'mongoose';
import { IPenilaianAnggota } from '../../../interface/IPenilaianAnggota';

export type PenilaianAnggotaDocument = Document & IPenilaianAnggota;
const InvoiceSchema: Schema<PenilaianAnggotaDocument> = new Schema({
  guestId: {
    type: String,
    required: true,
  },
  nim: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
});

const PenilaianAnggota = model<PenilaianAnggotaDocument>(
  'PenilaianAnggota',
  InvoiceSchema
);
export default PenilaianAnggota;
