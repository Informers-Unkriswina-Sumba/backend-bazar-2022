import { Document, model, Schema } from 'mongoose';
import { IKeranjang } from '../../../interface/IKeranjang';

export type KeranjangDocument = Document & IKeranjang;

const KeranjangSchema: Schema<KeranjangDocument> = new Schema({
  guestId: {
    type: String,
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
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

const Keranjang = model<KeranjangDocument>('Keranjang', KeranjangSchema);
export default Keranjang;
