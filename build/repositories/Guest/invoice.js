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
const generateInvoice = (payload, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const product = Pro (cari produk dulu yak harusnya)
        const invoices = yield invoice_1.default.find();
        console.log('payload', payload);
        const newInvoice = yield invoice_1.default.create({
            guestId: payload.guestId,
            namaPembeli: payload.dataPembeli.nama,
            typePembeli: payload.dataPembeli.type,
            metodePembelian: payload.metodePembelian,
            produk: payload.produk,
            invoiceNumber: invoices.length + 1,
            lapak: payload.lapak,
            status: 'Belum Lunas',
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        if (!newInvoice) {
            return res.status(400).send({
                success: false,
                data: null,
                message: 'Failed generate invoice',
            });
        }
        return res.send({
            success: true,
            data: newInvoice,
            message: 'Success generate invoice',
        });
    }
    catch (err) {
        console.log('err', err);
        next(err);
    }
});
exports.default = { generateInvoice };
//# sourceMappingURL=invoice.js.map