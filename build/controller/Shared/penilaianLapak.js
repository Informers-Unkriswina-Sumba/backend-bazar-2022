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
const penilaianLapak_1 = __importDefault(require("../../repositories/Shared/penilaianLapak"));
const createPenilaianLapak = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield penilaianLapak_1.default.createPenilaianLapak(req.body, req, res, next);
    }
    catch (err) {
        next(err);
    }
});
const getPenilaianLapakByLapakAndGuest = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield penilaianLapak_1.default.getPenilaianLapakByGuestAndLapakId(req.params.guestId, req.params.lapakId, res, next);
    }
    catch (err) {
        next(err);
    }
});
exports.default = { createPenilaianLapak, getPenilaianLapakByLapakAndGuest };
//# sourceMappingURL=penilaianLapak.js.map