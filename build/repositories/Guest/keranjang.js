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
const mongoose_1 = __importDefault(require("mongoose"));
const keranjang_1 = __importDefault(require("../../db/mongodb/models/keranjang"));
const addProduct = (payload, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const product = Pro (cari produk dulu yak harusnya)
        console.log('payload', payload);
        const keranjang = yield keranjang_1.default.findOne({
            guestId: payload.idGuest,
            productId: payload.productId,
        });
        if (keranjang) {
            return res.status(400).send({
                success: false,
                data: null,
                message: 'Product already in cart',
            });
        }
        const newKeranjang = yield keranjang_1.default.create({
            guestId: payload.idGuest,
            productId: payload.productId,
            created_at: new Date(),
        });
        return res.send({
            success: true,
            data: newKeranjang,
            message: 'Success add product to cart',
        });
    }
    catch (err) {
        console.log('err', err);
        next(err);
    }
});
const findAll = (idGuest, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const product = Pro (cari produk dulu yak harusnya)
        const keranjang = yield keranjang_1.default.find({
            guestId: idGuest,
        });
        return res.send({
            success: true,
            data: keranjang,
            message: 'Success get cart',
        });
    }
    catch (err) {
        console.log('err', err);
        next(err);
    }
});
const deleteCart = (cartId, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const product = Pro (cari produk dulu yak harusnya)
        const id = new mongoose_1.default.Types.ObjectId(cartId);
        const keranjang = yield keranjang_1.default.findByIdAndDelete(id);
        console.log('keranjang', keranjang);
        return res.send({
            success: true,
            data: keranjang,
            message: 'Success delete cart',
        });
    }
    catch (err) {
        console.log('err', err);
        next(err);
    }
});
exports.default = { addProduct, findAll, deleteCart };
//# sourceMappingURL=keranjang.js.map