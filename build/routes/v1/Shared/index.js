"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const invoice_1 = __importDefault(require("./invoice"));
const lapak_1 = __importDefault(require("./lapak"));
const penilaianAnggota_1 = __importDefault(require("./penilaianAnggota"));
const penilaianLapak_1 = __importDefault(require("./penilaianLapak"));
const product_1 = __importDefault(require("./product"));
const sharedRouter = express_1.default.Router();
sharedRouter.use('/invoice', invoice_1.default);
sharedRouter.use('/lapak', lapak_1.default);
sharedRouter.use('/product', product_1.default);
sharedRouter.use('/penilaian-anggota', penilaianAnggota_1.default);
sharedRouter.use('/penilaian-lapak', penilaianLapak_1.default);
exports.default = sharedRouter;
//# sourceMappingURL=index.js.map