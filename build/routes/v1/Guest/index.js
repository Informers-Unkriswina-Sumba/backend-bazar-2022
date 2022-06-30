"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const invoice_1 = __importDefault(require("./invoice"));
const keranjang_1 = __importDefault(require("./keranjang"));
const guestRouter = express_1.default.Router();
guestRouter.use('/keranjang', keranjang_1.default);
guestRouter.use('/invoice', invoice_1.default);
exports.default = guestRouter;
//# sourceMappingURL=index.js.map