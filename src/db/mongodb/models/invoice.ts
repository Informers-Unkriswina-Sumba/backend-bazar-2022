import { Document, model, Schema } from 'mongoose';
import { IInvoice } from '../../../interface/IInvoice';

export type InvoiceDocument = Document & IInvoice;
const InvoiceSchema: Schema<InvoiceDocument> = new Schema({
  guestId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  namaPembeli: {
    type: String,
    required: true,
  },
  invoiceNumber: {
    type: Number,
    required: true,
  },
  typePembeli: {
    type: String,
    required: true,
  },
  lapak: {
    type: Schema.Types.ObjectId,
    ref: 'Lapak',
  },
  metodePembelian: {
    type: String,
    required: true,
  },
  produk: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
      qty: {
        type: Number,
        required: true,
      },
    },
  ],
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

const Invoice = model<InvoiceDocument>('Invoice', InvoiceSchema);
export default Invoice;
