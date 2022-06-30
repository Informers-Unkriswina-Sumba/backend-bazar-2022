"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../../../middleware");
const inovoice_1 = __importDefault(require("../../../controller/Shared/inovoice"));
const invoiceRouter = express_1.default.Router();
invoiceRouter.get('/print/:invoiceId', (0, middleware_1.asyncErrorHandler)(inovoice_1.default.printInvoice));
exports.default = invoiceRouter;
//# sourceMappingURL=invoice.js.map