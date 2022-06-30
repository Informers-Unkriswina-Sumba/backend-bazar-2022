"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const summary_1 = __importDefault(require("./summary"));
const summaryRouters = express_1.default.Router();
summaryRouters.use('/', summary_1.default);
exports.default = summaryRouters;
//# sourceMappingURL=index.js.map