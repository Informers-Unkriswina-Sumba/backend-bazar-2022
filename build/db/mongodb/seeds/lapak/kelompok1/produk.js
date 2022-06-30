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
exports.createProdukKelompok1Seeds = void 0;
const product_1 = __importDefault(require("../../../models/product"));
const createProdukKelompok1Seeds = () => __awaiter(void 0, void 0, void 0, function* () {
    // const hashPass: any = await hashingPassword(payload.password);
    // payload.password = hashPass;
    const lapakId = '62b53fed27ea5275f8cfb3b9';
    const produkData = [
        {
            gambar: ['https://backend.unwinapreneur.com/uploads/kelompok-1.jpg'],
            nama: 'Lumpia',
            minimalPembelian: 0,
            harga: 0,
            satuan: '',
            deskripsi: ``,
            lapak: lapakId,
            isSuspended: false,
            createdAt: new Date(),
            type: 'barang', // barang | jasa
        },
        {
            gambar: ['https://backend.unwinapreneur.com/uploads/kelompok-1.jpg'],
            nama: 'Es kelapa',
            minimalPembelian: 0,
            harga: 0,
            satuan: '',
            deskripsi: ``,
            lapak: lapakId,
            isSuspended: false,
            createdAt: new Date(),
            type: 'barang', // barang | jasa
        },
        {
            gambar: ['https://backend.unwinapreneur.com/uploads/kelompok-1.jpg'],
            nama: 'Kopi',
            minimalPembelian: 0,
            harga: 0,
            satuan: '',
            deskripsi: ``,
            lapak: lapakId,
            isSuspended: false,
            createdAt: new Date(),
            type: 'barang', // barang | jasa
        },
    ];
    for (const produk of produkData) {
        yield product_1.default.create(produk);
    }
    console.log('successfully running produk kelompok 1 seeds');
});
exports.createProdukKelompok1Seeds = createProdukKelompok1Seeds;
//# sourceMappingURL=produk.js.map