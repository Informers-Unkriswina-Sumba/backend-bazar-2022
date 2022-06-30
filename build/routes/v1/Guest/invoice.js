"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../../../middleware");
const invoice_1 = __importDefault(require("../../../controller/Guest/invoice"));
const invoiceRouter = express_1.default.Router();
invoiceRouter.post('/generate', (0, middleware_1.asyncErrorHandler)(invoice_1.default.generateInvoice));
exports.default = invoiceRouter;
//# sourceMappingURL=invoice.js.map