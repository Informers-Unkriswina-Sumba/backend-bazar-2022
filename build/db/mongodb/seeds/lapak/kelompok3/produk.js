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
exports.createProdukKelompok3Seeds = void 0;
const product_1 = __importDefault(require("../../../models/product"));
const createProdukKelompok3Seeds = () => __awaiter(void 0, void 0, void 0, function* () {
    // const hashPass: any = await hashingPassword(payload.password);
    // payload.password = hashPass;
    const lapakId = '62b53fed27ea5275f8cfb3b5';
    const produkData = [
        [
            {
                gambar: ['https://unwinapreneur.com/uploads/kelompok-3-klepon.jpg'],
                nama: 'Klepon',
                minimalPembelian: 0,
                harga: 5000,
                satuan: 'Mika',
                deskripsi: `<p>Klepon 5.000/mika pembelian 2 mika gratis 1 cup kopi</p><p>&nbsp;</p>
        <p>Kelpon adalah sejenis makanan tradisional atau kue tradisional Indonesia yang termasuk ke dalam kelompok jajanan pasar. Makanan enak ini terbuat dari tepung beras ketan yag dibentuk seperti bola-bola kecil dan diisi dengan gula merah lalu direbus di dalam air mendidih.</p>
        <p>&bull; Kandungan dari klepon Jika mengonsumsi 4 butir klepon saja dalam sekali makan, maka total kalori yang kamu dapatkan adalah sekitar 400 kalori. Selain itu, dalam satu butir klepon juga terdapat 2.8 gram lemak, 19.75 gram karbohidrat, dan 1.42 gram protein.</p>
        <p>&bull; Manfaat klepon Klepon memiliki senyawa niacin yang membantu sistem pencernaan menjadi lebih lancar. Dengan sistem pencernaan lebih lancar akan membuat tubuh terhindar dari berbagai macam jenis penyakit seperti sembelit.</p>
    `,
                lapak: lapakId,
                isSuspended: false,
                createdAt: new Date(),
                type: 'barang', // barang | jasa
            },
            {
                gambar: [
                    'https://unwinapreneur.com/uploads/kelompok-3-popcorn-tahu.jpg',
                ],
                nama: 'Tahu Popcorn',
                minimalPembelian: 0,
                harga: 0,
                satuan: '',
                deskripsi: `<p>Tahu popcorn merupakan jajanan kekinian yang banyak diminati oleh anak muda zaman sekarang. Tahu popcorn merupakan jajanan yang terbuat dari bahan dasar tahu, sosis, telur, terigu dan bumbu lainnya yang digabung menjadi satu adonan kemudian dibentuk menjadi bola-bola kecil menyerupai popcorn dan digoreng.</p>
        <p>&bull; Kandungan dari Tahu Popcorn Tahu popcorn mengandung banyak protein karena bahan-bahan yang digunakan memiliki kandungan protein yang cukup tinggi contohnya tahu, telur, dan tepung. Tahu popcorn juga mengandung beragam nutrisi, seperti karbohidrat , serat, lemak, asam amino esensial dan berbagai mineral, seperti kalsium, selenium, fosfor, magnesium, dan zat besi.</p>
        <p>&bull; Manfaat Tahu Popcorn</p>
        <p>- Mencegah risiko serangan jantung</p>
        <p>- Mengurangi risiko kanker</p>
        <p>- Menurunkan berat badan</p>
        <p>- Melancarkan pencernaan</p>
        <p>- Mencegah risiko diabetes tipe 2</p>
        <p>- Mengurangi gejala menopause</p>
        <p>- Mencegah osteoporosis</p>
        <p>- Menjaga fungsi kognitif otak</p>
        <p>- Mengurangi penuaan kulit</p>
        <p>- Menurunkan kolesterol</p>`,
                lapak: lapakId,
                isSuspended: false,
                createdAt: new Date(),
                type: 'barang', // barang | jasa
            },
        ],
    ];
    for (const produk of produkData) {
        yield product_1.default.create(produk);
    }
    console.log('successfully running produk kelompok 3 seeds');
});
exports.createProdukKelompok3Seeds = createProdukKelompok3Seeds;
//# sourceMappingURL=produk.js.map