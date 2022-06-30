"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../../../middleware");
const penilaianLapak_1 = __importDefault(require("../../../controller/Shared/penilaianLapak"));
const penilaianLapakRouter = express_1.default.Router();
penilaianLapakRouter.post('/create', (0, middleware_1.asyncErrorHandler)(penilaianLapak_1.default.createPenilaianLapak));
penilaianLapakRouter.get('/find/:guestId/:lapakId', (0, middleware_1.asyncErrorHandler)(penilaianLapak_1.default.getPenilaianLapakByLapakAndGuest));
exports.default = penilaianLapakRouter;
//# sourceMappingURL=penilaianLapak.js.map