import { Schema, model, Model } from 'mongoose';
import bcrypt from 'bcrypt';
import { IPelapak } from '../../../interface/IPelapak';
import { ROUNDED_SALT_BCRYPT } from '../../../config';

/**
 * Not directly exported because it is not recommanded to
 * use this interface direct unless necessary since the
 * type of `company` field is not deterministic
 */
export type PelapakDocument = Document & IPelapak;

// Create a Schema corresponding to the document interface.
const PelapakSchema: Schema<PelapakDocument> = new Schema({
  nama: {
    type: String,
    required: true,
  },
  lapak: {
    // type: String,
    // required: true,
    type: Schema.Types.ObjectId,
    ref: 'Lapak',
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  token: {
    type: String,
    default: null,
  },
  password: {
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

// Document middlewares
// PelapakSchema.pre('save', async function (this: PelapakDocument, next) {
//   console.log('this.password', this.password);
//   const hash = await bcrypt.hash(this.password, ROUNDED_SALT_BCRYPT);
//   this.password = hash;
//   next();
// });

// Methods
PelapakSchema.methods.isValidPassword = async function (
  this: PelapakDocument,
  password: string
): Promise<boolean> {
  const compare = await bcrypt.compare(password, this.password);
  return compare;
};

// Hide password field
PelapakSchema.set('toJSON', {
  transform: function (doc, ret, opt) {
    delete ret['password'];
    return ret;
  },
});

const Pelapak = model<PelapakDocument>('Pelapak', PelapakSchema);
export default Pelapak;
