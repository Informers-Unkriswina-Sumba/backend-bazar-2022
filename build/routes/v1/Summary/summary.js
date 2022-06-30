"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../../../middleware");
const summary_1 = __importDefault(require("../../../controller/Summary/summary"));
const summaryRouter = express_1.default.Router();
summaryRouter.get('/total-data', (0, middleware_1.asyncErrorHandler)(summary_1.default.getTotalData));
summaryRouter.get('/best-performance-lapak', (0, middleware_1.asyncErrorHandler)(summary_1.default.getBestPerformanceLapak));
summaryRouter.get('/best-performance-mahasiswa', (0, middleware_1.asyncErrorHandler)(summary_1.default.getBestPerformanceMahasiswa));
exports.default = summaryRouter;
//# sourceMappingURL=summary.js.map