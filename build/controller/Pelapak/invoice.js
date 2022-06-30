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
const inovoice_1 = __importDefault(require("../../repositories/Pelapak/inovoice"));
const getList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield inovoice_1.default.getInvoiceByLapakId(req.params.lapakId, res, next);
    }
    catch (err) {
        next(err);
    }
});
const updateStatusInvoice = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { inovoiceId, status } = req.body;
        yield inovoice_1.default.updateStatusInvoice(inovoiceId, status, res, next);
    }
    catch (err) {
        next(err);
    }
});
exports.default = { getList, updateStatusInvoice };
//# sourceMappingURL=invoice.js.map