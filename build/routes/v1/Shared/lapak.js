"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../../../middleware");
const lapak_1 = __importDefault(require("../../../controller/Shared/lapak"));
const lapakRouter = express_1.default.Router();
lapakRouter.get('/slug-name/:slugName', (0, middleware_1.asyncErrorHandler)(lapak_1.default.getLapakBySlugName));
lapakRouter.get('/list', (0, middleware_1.asyncErrorHandler)(lapak_1.default.getListLapak));
lapakRouter.get('/lapak-id/:lapakId', (0, middleware_1.asyncErrorHandler)(lapak_1.default.getLapakById));
exports.default = lapakRouter;
//# sourceMappingURL=lapak.js.map