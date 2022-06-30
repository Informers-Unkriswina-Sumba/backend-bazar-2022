"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../../../middleware");
const penilaianAnggota_1 = __importDefault(require("../../../controller/Shared/penilaianAnggota"));
const penilaianAnggotaRouter = express_1.default.Router();
penilaianAnggotaRouter.post('/create', (0, middleware_1.asyncErrorHandler)(penilaianAnggota_1.default.createPenilaianAnggota));
penilaianAnggotaRouter.get('/find/:guestId/:nim', (0, middleware_1.asyncErrorHandler)(penilaianAnggota_1.default.getPenilaianAnggotaByNimAndGuest));
exports.default = penilaianAnggotaRouter;
//# sourceMappingURL=penilaianAnggota.js.map