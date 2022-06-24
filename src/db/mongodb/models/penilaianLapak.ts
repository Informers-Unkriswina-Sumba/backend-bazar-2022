import { Document, model, Schema } from 'mongoose';
import { IPenilaianLapak } from '../../../interface/IPenilaianLapak';

export type PenilaianLapakDocument = Document & IPenilaianLapak;
const InvoiceSchema: Schema<PenilaianLapakDocument> = new Schema({
  guestId: {
    type: String,
    required: true,
  },
  lapakId: {
    type: Schema.Types.ObjectId,
    ref: 'Lapak',
  },
  rating: {
    type: Number,
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

const PenilaianLapak = model<PenilaianLapakDocument>(
  'PenilaianLapak',
  InvoiceSchema
);
export default PenilaianLapak;
