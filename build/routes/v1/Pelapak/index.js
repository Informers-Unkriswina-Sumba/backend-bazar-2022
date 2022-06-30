"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./auth"));
const invoice_1 = __importDefault(require("./invoice"));
const pelapakRouter = express_1.default.Router();
pelapakRouter.use('/auth', auth_1.default);
pelapakRouter.use('/invoice', invoice_1.default);
exports.default = pelapakRouter;
//# sourceMappingURL=index.js.map