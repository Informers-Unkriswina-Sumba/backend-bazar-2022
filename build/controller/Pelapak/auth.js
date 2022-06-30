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
const auth_1 = __importDefault(require("../../repositories/Pelapak/auth"));
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield auth_1.default.login(req.body, res, next);
    }
    catch (err) {
        next(err);
    }
});
const checkLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield auth_1.default.checkLogin(req.body.token, res, next);
    }
    catch (err) {
        next(err);
    }
});
const logout = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield auth_1.default.logout(req.user.pelapakId, res, next);
    }
    catch (err) {
        next(err);
    }
});
exports.default = { login, checkLogin, logout };
//# sourceMappingURL=auth.js.map