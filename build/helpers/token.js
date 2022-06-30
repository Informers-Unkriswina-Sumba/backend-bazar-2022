"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTempToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// const createToken = (user: { id: string; email: string; is_admin: boolean }) =>
const createTempToken = () => jsonwebtoken_1.default.sign({
    user_id: '61bda332e8b6eb82786af6aa',
    email: 'r3ndydinar@gmail.com',
    is_admin: true,
}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN, // token expires 336 hour
});
exports.createTempToken = createTempToken;
//# sourceMappingURL=token.js.map