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
const lapak_1 = __importDefault(require("../../db/mongodb/models/lapak"));
const getLapakBySlugName = (slugName, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let lapak = yield lapak_1.default.findOne({ slugName: slugName });
        if (!lapak) {
            return res.status(400).send({
                success: false,
                data: null,
                message: 'Lapak not found',
            });
        }
        return res.send({
            success: true,
            data: lapak,
            message: 'Success get lapak',
        });
    }
    catch (err) {
        console.log('err', err);
        next(err);
    }
});
const getListLapak = (res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lapaks = yield lapak_1.default.find();
        return res.send({
            success: true,
            data: lapaks,
            message: 'Success get lapaks',
        });
    }
    catch (err) {
        console.log('err', err);
        next(err);
    }
});
const getLapakById = (id, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let lapak = yield lapak_1.default.findById(id);
        if (!lapak) {
            return res.status(400).send({
                success: false,
                data: null,
                message: 'Lapak not found',
            });
        }
        return res.send({
            success: true,
            data: lapak,
            message: 'Success get lapak',
        });
    }
    catch (err) {
        console.log('err', err);
        next(err);
    }
});
exports.default = { getLapakBySlugName, getListLapak, getLapakById };
//# sourceMappingURL=lapak.js.map