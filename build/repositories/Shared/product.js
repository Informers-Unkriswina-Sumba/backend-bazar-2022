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
const product_1 = __importDefault(require("../../db/mongodb/models/product"));
const getProductById = (id, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_1.default.findById(id);
        if (!product) {
            return res.status(400).send({
                success: false,
                data: null,
                message: 'Product not found',
            });
        }
        return res.send({
            success: true,
            data: product,
            message: 'Success get product',
        });
    }
    catch (err) {
        console.log('err', err);
        next(err);
    }
});
const getProductByLapak = (lapakId, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.default.find({
            lapak: lapakId,
        });
        return res.send({
            success: true,
            data: products,
            message: 'Success get products',
        });
    }
    catch (err) {
        console.log('err', err);
        next(err);
    }
});
exports.default = { getProductById, getProductByLapak };
//# sourceMappingURL=product.js.map