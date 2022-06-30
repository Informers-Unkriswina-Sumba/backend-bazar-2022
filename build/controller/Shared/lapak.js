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
const lapak_1 = __importDefault(require("../../repositories/Shared/lapak"));
const getLapakBySlugName = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield lapak_1.default.getLapakBySlugName(req.params.slugName, req, res, next);
    }
    catch (err) {
        next(err);
    }
});
const getListLapak = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield lapak_1.default.getListLapak(res, next);
    }
    catch (err) {
        next(err);
    }
});
const getLapakById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield lapak_1.default.getLapakById(req.params.lapakId, req, res, next);
    }
    catch (err) {
        next(err);
    }
});
exports.default = { getLapakBySlugName, getListLapak, getLapakById };
//# sourceMappingURL=lapak.js.map