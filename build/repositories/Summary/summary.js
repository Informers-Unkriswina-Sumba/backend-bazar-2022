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
const penilaianAnggota_1 = __importDefault(require("../../db/mongodb/models/penilaianAnggota"));
const product_1 = __importDefault(require("../../db/mongodb/models/product"));
const penilaianLapak_1 = __importDefault(require("../../db/mongodb/models/penilaianLapak"));
const lapak_1 = __importDefault(require("../../db/mongodb/models/lapak"));
const invoice_1 = __importDefault(require("../../db/mongodb/models/invoice"));
const getTotalData = (res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lapak = yield lapak_1.default.countDocuments();
        const product = yield product_1.default.countDocuments();
        const invoice = yield invoice_1.default.countDocuments();
        const pelapak = 204; // data total mahasiswa
        const data = {
            totalLapak: lapak,
            totalProduk: product,
            totalInvoice: invoice,
            totalPelapak: pelapak,
        };
        return res.send({
            success: true,
            data: data,
            message: 'Success get total data',
        });
    }
    catch (err) {
        console.log('err', err);
        next(err);
    }
});
const getBestPerformanceLapak = (res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let lapaks = yield penilaianLapak_1.default.aggregate([
            {
                $group: {
                    _id: { source: '$lapakId', status: '$status' },
                    count: { $sum: 1 },
                },
            },
            { $sort: { count: -1 } },
        ]);
        let data = [];
        for (const lapak of lapaks) {
            const info = yield lapak_1.default.findById(lapak._id.source).select('_id namaKelompok namaLapak deskripsi logo slugName');
            const review = yield penilaianLapak_1.default.find({
                lapakId: lapak._id.source,
            }).select('_id rating description createdAt');
            data.push({
                info,
                review,
            });
        }
        return res.send({
            success: true,
            data: data,
            message: 'Success get best performance lapak',
        });
    }
    catch (err) {
        console.log('err', err);
        next(err);
    }
});
const getBestPerformanceMahasiswa = (res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let mahasiswa = yield penilaianAnggota_1.default.aggregate([
            {
                $group: {
                    _id: { source: '$nim', status: '$status' },
                    count: { $sum: 1 },
                },
            },
            { $sort: { count: -1 } },
            { $limit: 20 },
        ]);
        let data = [];
        for (const mhs of mahasiswa) {
            const info = yield penilaianAnggota_1.default.find({ nim: mhs._id.source }).select('_id nim description createdAt');
            data.push({
                totalRating: mhs.count,
                dataRating: info,
            });
        }
        return res.send({
            success: true,
            data: data,
            message: 'Success get best performance mahasiswa',
        });
    }
    catch (err) {
        console.log('err', err);
        next(err);
    }
});
exports.default = {
    getTotalData,
    getBestPerformanceLapak,
    getBestPerformanceMahasiswa,
};
//# sourceMappingURL=summary.js.map