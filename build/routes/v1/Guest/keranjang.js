"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../../../middleware");
const keranjang_1 = __importDefault(require("../../../controller/Guest/keranjang"));
const keranjangRouter = express_1.default.Router();
keranjangRouter.post('/add', (0, middleware_1.asyncErrorHandler)(keranjang_1.default.addProduct));
keranjangRouter.get('/find-all/:guestId', (0, middleware_1.asyncErrorHandler)(keranjang_1.default.findAll));
keranjangRouter.delete('/delete/:id', (0, middleware_1.asyncErrorHandler)(keranjang_1.default.deleteCart));
exports.default = keranjangRouter;
//# sourceMappingURL=keranjang.js.map