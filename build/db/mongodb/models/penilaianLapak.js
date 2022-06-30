"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const InvoiceSchema = new mongoose_1.Schema({
    guestId: {
        type: String,
        required: true,
    },
    lapakId: {
        type: mongoose_1.Schema.Types.ObjectId,
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
const PenilaianLapak = (0, mongoose_1.model)('PenilaianLapak', InvoiceSchema);
exports.default = PenilaianLapak;
//# sourceMappingURL=penilaianLapak.js.map