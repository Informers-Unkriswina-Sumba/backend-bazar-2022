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
exports.logout = exports.checkLogin = exports.login = void 0;
const pelapak_1 = __importDefault(require("../../db/mongodb/models/pelapak"));
const jwt_1 = require("../../helpers/jwt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_2 = require("../../config/jwt");
const login = (payload, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate if user exist in our database
        const palapak = yield pelapak_1.default.findOne({ email: payload.email });
        if (!palapak) {
            return res.status(400).send({
                success: false,
                data: null,
                message: 'Email atau password salah',
            });
        }
        const validate = yield palapak.isValidPassword(payload.password);
        if (!validate) {
            return res.status(400).send({
                success: false,
                data: null,
                message: 'Email atau password salah',
            });
        }
        const token = (0, jwt_1.createJWTToken)({
            id: String(palapak._id),
            email: palapak.email,
        });
        palapak.token = token;
        palapak.save(); // save after add palapak token, running on
        return res.send({
            success: true,
            data: palapak,
            message: 'Success login',
        });
    }
    catch (e) {
        next(e);
    }
});
exports.login = login;
const checkLogin = (token, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const pelapak = yield pelapak_1.default.findOne({ token: token });
    if (!pelapak) {
        return res.status(400).send({
            success: false,
            data: null,
            message: 'Token is invalid',
        });
    }
    try {
        jsonwebtoken_1.default.verify(token, jwt_2.JWT_SECRET);
        return res.status(200).send({
            success: true,
            data: pelapak,
            message: 'Login success',
        });
    }
    catch (err) {
        if (err.message === 'jwt expired') {
            return res.status(400).send({
                success: false,
                data: null,
                message: 'Token is expired',
            });
        }
        next(err);
    }
});
exports.checkLogin = checkLogin;
const logout = (pelapakId, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // check if user already exist
    const pelapak = yield pelapak_1.default.findById(pelapakId);
    if (pelapak) {
        pelapak.token = '';
        pelapak.save();
        return res.send({
            success: true,
            data: null,
            message: 'Success logout',
        });
    }
    else {
        return res.status(400).send({
            success: true,
            data: null,
            message: 'Error logout',
        });
    }
});
exports.logout = logout;
exports.default = { login: exports.login, checkLogin: exports.checkLogin, logout: exports.logout };
//# sourceMappingURL=auth.js.map