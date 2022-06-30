"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJWTToken = void 0;
const jwt_1 = require("../config/jwt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createJWTToken = (user) => jsonwebtoken_1.default.sign({
    pelapakId: user.id,
    email: user.email,
}, jwt_1.JWT_SECRET, {
    expiresIn: jwt_1.JWT_EXPIRES_IN, // token expires 2 hour
});
exports.createJWTToken = createJWTToken;
//# sourceMappingURL=jwt.js.map