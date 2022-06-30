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
const summary_1 = __importDefault(require("../../repositories/Summary/summary"));
// getTotalData
// getBestPerformanceLapak
const getTotalData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield summary_1.default.getTotalData(res, next);
    }
    catch (err) {
        next(err);
    }
});
const getBestPerformanceLapak = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield summary_1.default.getBestPerformanceLapak(res, next);
    }
    catch (err) {
        next(err);
    }
});
const getBestPerformanceMahasiswa = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield summary_1.default.getBestPerformanceMahasiswa(res, next);
    }
    catch (err) {
        next(err);
    }
});
exports.default = {
    getTotalData,
    getBestPerformanceLapak,
    getBestPerformanceMahasiswa,
};
//# sourceMappingURL=summary.js.map