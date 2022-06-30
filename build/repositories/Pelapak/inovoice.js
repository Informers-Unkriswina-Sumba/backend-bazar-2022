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
const invoice_1 = __importDefault(require("../../db/mongodb/models/invoice"));
const getInvoiceByLapakId = (lapakId, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoices = yield invoice_1.default.find({ lapak: lapakId });
        return res.send({
            success: true,
            data: invoices,
            message: 'Success get invoice',
        });
    }
    catch (err) {
        console.log('err', err);
        next(err);
    }
});
const updateStatusInvoice = (invoiceId, status, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoice = yield invoice_1.default.findById(invoiceId);
        if (!invoice) {
            return res.status(400).send({
                success: false,
                data: null,
                message: 'Invoice not found',
            });
        }
        const updateInvoice = yield invoice_1.default.findOneAndUpdate({ _id: invoiceId }, {
            status: status,
            updatedAt: new Date(),
        }, { new: true });
        return res.send({
            success: true,
            data: updateInvoice,
            message: 'Success update invoice',
        });
    }
    catch (err) {
        console.log('err', err);
        next(err);
    }
});
exports.default = { updateStatusInvoice, getInvoiceByLapakId };
//# sourceMappingURL=inovoice.js.map