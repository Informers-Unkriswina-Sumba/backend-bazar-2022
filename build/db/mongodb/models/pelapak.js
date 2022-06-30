"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
// Create a Schema corresponding to the document interface.
const PelapakSchema = new mongoose_1.Schema({
    nama: {
        type: String,
        required: true,
    },
    lapak: {
        // type: String,
        // required: true,
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Lapak',
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    noTelfon: {
        type: String,
    },
    token: {
        type: String,
        default: null,
    },
    password: {
        type: String,
    },
    createdAt: {
        type: Date,
    },
    deletedAt: {
        type: Date,
        default: null,
    },
    updatedAt: {
        type: Date,
        default: null,
    },
});
// Document middlewares
// PelapakSchema.pre('save', async function (this: PelapakDocument, next) {
//   console.log('this.password', this.password);
//   const hash = await bcrypt.hash(this.password, ROUNDED_SALT_BCRYPT);
//   this.password = hash;
//   next();
// });
// Methods
PelapakSchema.methods.isValidPassword = function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        const compare = yield bcrypt_1.default.compare(password, this.password);
        return compare;
    });
};
// Hide password field
PelapakSchema.set('toJSON', {
    transform: function (doc, ret, opt) {
        delete ret['password'];
        return ret;
    },
});
const Pelapak = (0, mongoose_1.model)('Pelapak', PelapakSchema);
exports.default = Pelapak;
//# sourceMappingURL=pelapak.js.map