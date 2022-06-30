"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Guest_1 = __importDefault(require("./Guest"));
const Shared_1 = __importDefault(require("./Shared"));
const Pelapak_1 = __importDefault(require("./Pelapak"));
const Summary_1 = __importDefault(require("./Summary"));
const router = express_1.default.Router();
router.use('/guest', Guest_1.default);
router.use('/pelapak', Pelapak_1.default);
router.use('/shared', Shared_1.default);
router.use('/summary', Summary_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map