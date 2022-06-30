"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProdukSchema = new mongoose_1.Schema({
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
    lapak: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Lapak' },
    isSuspended: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date },
    updatedAt: { type: Date },
    deletedAt: { type: Date },
    type: { type: String },
});
const Product = (0, mongoose_1.model)('Product', ProdukSchema);
exports.default = Product;
//# sourceMappingURL=product.js.map