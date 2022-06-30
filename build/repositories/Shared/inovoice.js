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
const createInvoice_1 = __importDefault(require("../../helpers/createInvoice"));
const invoice_1 = __importDefault(require("../../db/mongodb/models/invoice"));
const product_1 = __importDefault(require("../../db/mongodb/models/product"));
const lapak_1 = __importDefault(require("../../db/mongodb/models/lapak"));
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const printInvoice = (invoiceId, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoice = yield invoice_1.default.findById(invoiceId); // harusnya populate lapak & produk
        const lapak = yield lapak_1.default.findById(invoice.lapak);
        console.log('invoice', invoice);
        if (!invoice) {
            return res.status(400).send({
                success: false,
                data: null,
                message: 'Invoice not found',
            });
        }
        let dataItems = [];
        let totalPesanan = 0;
        for (const item of invoice.produk) {
            const product = yield product_1.default.findById(item.id);
            dataItems.push({
                item: product.nama,
                qty: item.qty,
                amount: product.harga,
            });
            totalPesanan += product.harga * item.qty;
        }
        const invoiceData = {
            pembeli: {
                nama: invoice.namaPembeli,
                type: invoice.typePembeli,
            },
            metodePembelian: invoice.metodePembelian,
            status: invoice.status,
            createdAt: invoice.createdAt,
            updatedAt: invoice.updatedAt,
            items: dataItems,
            totalPesanan: totalPesanan,
            invoiceNumber: invoice.invoiceNumber,
            namaLapak: lapak.namaLapak,
        };
        const invoicePath = `files/invoices/${new Date()
            .getTime()
            .toString()}-invoice.pdf`;
        (0, createInvoice_1.default)(invoiceData, invoicePath);
        yield delay(5000);
        return res.download(invoicePath); // Set disposition and send it.
        // return res.send({
        //   success: true,
        //   data: null,
        //   message: 'Success print invoice',
        // });
    }
    catch (err) {
        console.log('err', err);
        next(err);
    }
});
exports.default = { printInvoice };
//# sourceMappingURL=inovoice.js.map