"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const v1_1 = __importDefault(require("./v1"));
const mainRouter = express_1.default.Router();
mainRouter.use('/v1', v1_1.default);
// default fallback routes (stable)
mainRouter.use(v1_1.default);
exports.default = mainRouter;
//# sourceMappingURL=index.js.map