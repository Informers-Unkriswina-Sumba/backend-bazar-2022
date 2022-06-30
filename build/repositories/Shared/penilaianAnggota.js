"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const penilaianAnggota_1 = __importDefault(require("../../db/mongodb/models/penilaianAnggota"));
const createPenilaianAnggota = (payload, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const penilaian = yield penilaianAnggota_1.default.findOne({
            guestId: payload.guestId,
            nim: payload.nim,
        });
        if (penilaian) {
            return res.status(400).send({
                success: false,
                data: null,
                message: 'Penilaian sudah dilakukan',
            });
        }
        const newPenilaian = yield penilaianAnggota_1.default.create(Object.assign(Object.assign({}, payload), { createdAt: new Date() }));
        return res.send({
            success: true,
            data: newPenilaian,
            message: 'Success create penilaian anggota',
        });
    }
    catch (err) {
        console.log('err', err);
        next(err);
    }
});
const getPenilaianAnggotaByGuestAndNim = (guestId, nim, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const penilaian = yield penilaianAnggota_1.default.findOne({
            guestId: guestId,
            nim: nim,
        });
        if (!penilaian) {
            return res.status(400).send({
                success: false,
                data: null,
                message: 'Penilaian tidak ditemukan',
            });
        }
        return res.send({
            success: true,
            data: penilaian,
            message: 'Success get penilaian',
        });
    }
    catch (err) {
        console.log('err', err);
        next(err);
    }
});
exports.default = { createPenilaianAnggota, getPenilaianAnggotaByGuestAndNim };
//# sourceMappingURL=penilaianAnggota.js.map