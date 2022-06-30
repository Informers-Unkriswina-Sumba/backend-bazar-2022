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
exports.createProdukKelompok10Seeds = void 0;
const product_1 = __importDefault(require("../../../models/product"));
const createProdukKelompok10Seeds = () => __awaiter(void 0, void 0, void 0, function* () {
    // const hashPass: any = await hashingPassword(payload.password);
    // payload.password = hashPass;
    const lapakId = '62b53fea27ea5275f8cfb3a6';
    const produkData = [
        {
            gambar: [
                'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            ],
            nama: 'Naget pisang',
            minimalPembelian: 1,
            harga: 0,
            satuan: '',
            deskripsi: '',
            lapak: lapakId,
            isSuspended: false,
            createdAt: new Date(),
        },
        {
            gambar: [
                'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            ],
            nama: 'Ubi goreng',
            minimalPembelian: 1,
            harga: 0,
            satuan: '',
            deskripsi: '',
            lapak: lapakId,
            isSuspended: false,
            createdAt: new Date(),
        },
        {
            gambar: [
                'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            ],
            nama: 'Kolak',
            minimalPembelian: 1,
            harga: 0,
            satuan: '',
            deskripsi: '',
            lapak: lapakId,
            isSuspended: false,
            createdAt: new Date(),
        },
        {
            gambar: [
                'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            ],
            nama: 'Es kacang ijo',
            minimalPembelian: 1,
            harga: 0,
            satuan: '',
            deskripsi: '',
            lapak: lapakId,
            isSuspended: false,
            createdAt: new Date(),
        },
    ];
    for (const produk of produkData) {
        yield product_1.default.create(produk);
    }
    console.log('successfully running produk kelompok 10 seeds');
});
exports.createProdukKelompok10Seeds = createProdukKelompok10Seeds;
//# sourceMappingURL=produk.js.map