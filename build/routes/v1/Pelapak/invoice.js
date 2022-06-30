"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../../../middleware");
const invoice_1 = __importDefault(require("../../../controller/Pelapak/invoice"));
const pelapakAuth_1 = require("../../../middleware/pelapakAuth");
const invoiceRouter = express_1.default.Router();
invoiceRouter.get('/list/:lapakId', (0, middleware_1.asyncErrorHandler)(pelapakAuth_1.isPelapakAuth), (0, middleware_1.asyncErrorHandler)(invoice_1.default.getList));
invoiceRouter.post('/update-status', (0, middleware_1.asyncErrorHandler)(pelapakAuth_1.isPelapakAuth), (0, middleware_1.asyncErrorHandler)(invoice_1.default.updateStatusInvoice));
exports.default = invoiceRouter;
//# sourceMappingURL=invoice.js.map