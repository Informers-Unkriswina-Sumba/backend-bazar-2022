import { Document, model, Schema } from 'mongoose';
import { ILapak } from '../../../interface/ILapak';

export type LapakDocument = Document & ILapak;

const LapakSchema: Schema<LapakDocument> = new Schema({
  namaKelompok: {
    type: String,
    required: true,
  },
  namaLapak: {
    type: String,
    required: true,
  },
  slugName: {
    type: String,
    required: true,
  },
  penanggungJawab: {
    type: String,
    required: true,
  },
  deskripsi: {
    type: String,
  },
  isSuspended: { type: Boolean, default: false },
  logo: {
    type: String,
    required: true,
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

const Lapak = model<LapakDocument>('Lapak', LapakSchema);
export default Lapak;
