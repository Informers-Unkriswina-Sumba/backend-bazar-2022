"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../../../middleware");
const auth_1 = __importDefault(require("../../../controller/Pelapak/auth"));
const pelapakAuth_1 = require("../../../middleware/pelapakAuth");
const authRouter = express_1.default.Router();
authRouter.post('/login', (0, middleware_1.asyncErrorHandler)(auth_1.default.login));
authRouter.post('/check-login', (0, middleware_1.asyncErrorHandler)(auth_1.default.checkLogin));
authRouter.post('/logout', (0, middleware_1.asyncErrorHandler)(pelapakAuth_1.isPelapakAuth), (0, middleware_1.asyncErrorHandler)(auth_1.default.logout));
exports.default = authRouter;
//# sourceMappingURL=auth.js.map