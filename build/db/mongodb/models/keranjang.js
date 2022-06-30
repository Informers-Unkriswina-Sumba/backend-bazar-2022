"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const KeranjangSchema = new mongoose_1.Schema({
    guestId: {
        type: String,
        required: true,
    },
    productId: {
        type: mongoose_1.Schema.Types.ObjectId,
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
const Keranjang = (0, mongoose_1.model)('Keranjang', KeranjangSchema);
exports.default = Keranjang;
//# sourceMappingURL=keranjang.js.map