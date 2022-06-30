"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../../../middleware");
const product_1 = __importDefault(require("../../../controller/Shared/product"));
const productRouter = express_1.default.Router();
productRouter.get('/detail/:productId', (0, middleware_1.asyncErrorHandler)(product_1.default.getProductById));
productRouter.get('/lapak/:lapakId', (0, middleware_1.asyncErrorHandler)(product_1.default.getProductByLapak));
exports.default = productRouter;
//# sourceMappingURL=product.js.map