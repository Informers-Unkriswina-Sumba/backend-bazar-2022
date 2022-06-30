"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const InvoiceSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Lapak',
    },
    metodePembelian: {
        type: String,
        required: true,
    },
    produk: [
        {
            id: {
                type: mongoose_1.Schema.Types.ObjectId,
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
const Invoice = (0, mongoose_1.model)('Invoice', InvoiceSchema);
exports.default = Invoice;
//# sourceMappingURL=invoice.js.map