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
exports.isPelapakAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_1 = require("../config/jwt");
const pelapak_1 = __importDefault(require("../db/mongodb/models/pelapak"));
// handle verify token
const isPelapakAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers['pelapak-token'] || req.headers.authorization;
    if (!token) {
        return res.status(401).send({
            success: false,
            data: null,
            message: 'A token is required for authentication',
        });
    }
    try {
        const pelapak = yield pelapak_1.default.findOne({ token: token });
        if (!pelapak) {
            return res.status(401).send({
                success: false,
                data: null,
                message: 'Pelapak no login',
            });
        }
        const decoded = jsonwebtoken_1.default.verify(token, jwt_1.JWT_SECRET);
        req.user = decoded;
    }
    catch (err) {
        if (err.message === 'jwt expired') {
            return res.status(401).send({
                success: false,
                data: null,
                message: 'Token is expired',
            });
        }
        return res.status(401).send({
            success: false,
            data: null,
            message: err.message,
        });
    }
    return next();
});
exports.isPelapakAuth = isPelapakAuth;
//# sourceMappingURL=pelapakAuth.js.map