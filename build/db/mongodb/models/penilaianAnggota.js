"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const InvoiceSchema = new mongoose_1.Schema({
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
const PenilaianAnggota = (0, mongoose_1.model)('PenilaianAnggota', InvoiceSchema);
exports.default = PenilaianAnggota;
//# sourceMappingURL=penilaianAnggota.js.map