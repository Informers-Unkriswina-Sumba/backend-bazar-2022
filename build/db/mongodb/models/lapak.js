"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LapakSchema = new mongoose_1.Schema({
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
const Lapak = (0, mongoose_1.model)('Lapak', LapakSchema);
exports.default = Lapak;
//# sourceMappingURL=lapak.js.map