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
const keranjang_1 = __importDefault(require("../../repositories/Guest/keranjang"));
const addProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield keranjang_1.default.addProduct(req.body, req, res, next);
    }
    catch (err) {
        next(err);
    }
});
const findAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield keranjang_1.default.findAll(req.params.guestId, req, res, next);
    }
    catch (err) {
        next(err);
    }
});
const deleteCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield keranjang_1.default.deleteCart(req.params.id, req, res, next);
    }
    catch (err) {
        next(err);
    }
});
exports.default = { addProduct, findAll, deleteCart };
//# sourceMappingURL=keranjang.js.map