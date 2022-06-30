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
exports.createProdukKelompok2Seeds = void 0;
const product_1 = __importDefault(require("../../../models/product"));
const createProdukKelompok2Seeds = () => __awaiter(void 0, void 0, void 0, function* () {
    // const hashPass: any = await hashingPassword(payload.password);
    // payload.password = hashPass;
    const lapakId = '62b53fed27ea5275f8cfb3af';
    const produkData = [
        {
            gambar: [
                'https://backend.unwinapreneur.com/uploads/kelompok-2-salad-buah-1.png',
                'https://backend.unwinapreneur.com/uploads/kelompok-2-salad-buah-2.png',
            ],
            nama: 'Salad buah',
            minimalPembelian: 0,
            harga: 0,
            satuan: '',
            deskripsi: `<p>&nbsp;</p>
      <p>Salad buah adalah makanan segar yang terbuat dari berbagai macam buah enak dan segar yang dicampur dengan bahan lain seperti yogurt, mayones dan keju. Umumnya makanan ini dijadikan sebagai hidangan penutup yang lezat, atau cocok untuk dijadikan camilan sore.</p>
      <p>Bahan-bahan:</p>
      <p>1. Apel</p>
      <p>2. Anggur</p>
      <p>3. Pisang</p>
      <p>4. Buah naga</p>
      <p>5. Nata de coco</p>
      <p>6. Mayones</p>
      <p>7. Susu kental manis</p>
      <p>8. keju</p>
      <p>&nbsp;</p>
      <p>Cara membuat</p>
      <p>1. Kupas buah pear dan apel dan kemudian cuci dan potong dadu.</p>
      <p>2. Kemudian cuci dan belah dua buah strawberry, dan kupas dan cuci buah nanas dan kemudian potong sesuai selera.</p>
      <p>3. Untuk sausnya, segera tuang mayones dan kental manis putih ke dalam mangkuk, lalu aduk rata.</p><p>4. Dalam wadah yang lebih besar, Moms bisa memasukkan semua buah-buahan yang telah dipotong-potong dan kemudian tuangkan saus salad yang telah dibuat.</p>
      <p>5. Tata salad buah ke mangkuk kecil, taburi keju cheddar parut dan hiasan dengan strawberry dan jeruk kupas.</p>
      <p>6. Salad buah sederhana namun penuh nutrisi siap disajikan di meja makan sebagai hidangan penutup. Namun lebih nikmat lagi jika Moms memasukkannya dahulu ke kulkas hingga dingin. Kandungan gizi dan nutrisi dalam salad buah Buah-buahan dibutuhkan tubuh karena berbagai nutrisi yang terkandung di dalamnya. Bicara soal nutrisi dalam salad buah, tentunya bisa berbeda-beda tergantung pilihan buah, dressing yang digunakan, serta apakah ada tambahan gula. Namun, mari ambil contoh salad buah yang dibuat dengan menggunakan apel, nanas, alpukat, anggur, stroberi, mangga, semangka, jeruk, dan pepaya, dengan dressing yoghurt. Secara umum, berikut ini kandungan nutrisinya: Serat Buah-buahan dalam salad buah memiliki kandungan serat yang cukup tinggi. Tentunya, nutrisi ini sangat dibutuhkan tubuh, untuk meningkatkan rasa kenyang, memperlambat penyerapan karbohidrat, menurunkan kadar kolesterol, dan menyehatkan pencernaan. Vitamin A Vitamin A dalam buah bermanfaat untuk memelihara kesehatan mata, kulit, dan jaringan tubuh, serta menurunkan risiko kanker prostat. Tak hanya itu, vitamin A juga berperan dalam menjaga daya tahan tubuh, lho. vitamin B1 Vitamin B1 atau disebut juga tiamin, memiliki peran penting dalam penggunaan karbohidrat menjadi sumber energi bagi tubuh. Selain itu, vitamin ini juga dapat membantu menjaga fungsi saraf. Vitamin B5 Dikenal juga dengan sebutan asam pantotenat, vitamin B5 memiliki manfaat untuk pembentukan sel darah merah, zat kimia otak, dan hormon steroid. Selain itu, vitamin ini juga dapat membantu tubuh memecah karbohidrat, protein, dan lemak. Vitamin B6 Sama seperti asam pantotenat, vitamin B6 juga bermanfaat untuk membantu pembentukan sel darah merah. Vitamin ini juga dapat mengurangi risiko penyakit jantung, meningkatkan suasana hati, kekebalan tubuh, kemampuan kognitif, serta kualitas tidur. Vitamin C Vitamin C punya banyak manfaat untuk tubuh. Beberapa di antaranya adalah meningkatkan daya tahan tubuh, membantu pembentukan kolagen, serta berperan sebagai antioksidan. Vitamin E Manfaat vitamin E tak kalah penting bagi tubuh. Vitamin ini dapat memelihara kesehatan kulit, kesuburan organ reproduksi, mata, sel darah, dan otak. Vitamin E juga merupakan zat antioksidan yang berperan penting dalam melawan radikal bebas dan melindungi sel dari kerusakan. Kalium Manfaat kalium bagi tubuh adalah untuk menurunkan tekanan darah, memelihara kesehatan jantung, dan membantu kontraksi otot. Mangan Mangan memiliki manfaat yang juga penting, antara lain membantu metabolisme asam amino, kolesterol, karbohidrat, dan pembentukan tulang. Asam Folat Bagi ibu hamil, asam folat punya manfaat penting untuk mengurangi risiko keguguran dan cacat tabung saraf pada bayi. Asam folat juga dapat membantu pembentukan sel tubuh yang baru, mencegah anemia, dan memelihara kesehatan secara umum. Kalsium Terkandung dalam yoghurt yang digunakan sebagai dressing, kalsium merupakan mineral yang bermanfaat untuk pertumbuhan serta pemeliharaan tulang dan gigi. Itulah nutrisi umum yang terkandung dalam salad buah. Seperti dikatakan sebelumnya, kandungan vitamin dan mineral dapat berbeda-beda tergantung jenis buahnya. Untuk mendapatkan nutrisi yang optimal dan beragam, masukkanlah berbagai jenis buah dalam salad buah.</p>`,
            lapak: lapakId,
            isSuspended: false,
            createdAt: new Date(),
            type: 'barang', // barang | jasa
        },
        {
            gambar: [
                'https://backend.unwinapreneur.com/uploads/kelompok-2-ayam-rica-1.png',
                'https://backend.unwinapreneur.com/uploads/kelompok-2-ayam-rica-1.png',
            ],
            nama: 'Ayam Rica-rica',
            minimalPembelian: 0,
            harga: 0,
            satuan: '',
            deskripsi: `<p>Ayam rica-rica adalah salah satu makanan khas Manado, Sulawesi Utara. Kata rica berasal dari bahasa Manado yang berarti &quot;pedas&quot; atau &quot;cabai&quot;. Resep untuk membuat ayam rica-rica sangat beragam, begitu pula cara memasaknya, persamaannya hanya terletak pada rasanya yang pedas. Ayam rica-rica biasa disajikan dengan nasi dan bahan pelengkap seperti bawang goreng dan mentimun.</p>
      <p>Bahan&rdquo; ayam rica-rica:</p>
      <p>1 ekor ayam, 2 lembar daun jeruk, 1 batang serai, memarkan 250 ml air, 2 batang daun bawang, iris kasar Bumbu, 3 butir kemiri, 2 cm jahe, 20 buah cabe rawit merah, 8 butir bawang merah, 3 siung bawang putih, 1 sdt gula pasir, 1 sdt garam.</p>
      <p>&nbsp;</p>
      <p>Cara membuat ayam rica-rica Potong-potong ayam menjadi beberapa bagian. Cuci bersih dan tiriskan hingga tidak berair Bumbu : Haluskan semua bumbu hingga benar-benar halus. Panaskan minyak, tumis bumbu halus hingga matang dan harum. Masukkan daun jeruk, daun serai,aduk hingga layu. Masukkan potongan ayam, aduk-aduk hingga kaku dan berubah warna. Tuangi air, tutup wajan masak hingga ayam lunak. Jika perlu tambahkan sedikit air panas. aduk hingga kuah agak kering dan ayam lunak. bisa juga ditambahkan daun kemangi dan aduk hingga kemangi layu lalu angkat kandungan ayam rica-rica dalam satu porsi ayam rica-rica mengandung 404 kalori, 22,82 g lemak, 7,41 g karbohidrat dan 40,99 protein. Ayam banyak mengandung vitamin B6, yang yang diperlukan tubuh untuk memetabolisme karbohidrat, lemak dan protein, memproduksi sel darah merah, serta memperkuat sistem kekebalan tubuh. Ayam bisa memberikan Anda hampir 36% dari seluruh kebutuhan harian vitamin B6.</p>`,
            lapak: lapakId,
            isSuspended: false,
            createdAt: new Date(),
            type: 'barang', // barang | jasa
        },
    ];
    for (const produk of produkData) {
        yield product_1.default.create(produk);
    }
    console.log('successfully running produk kelompok 2 seeds');
});
exports.createProdukKelompok2Seeds = createProdukKelompok2Seeds;
//# sourceMappingURL=produk.js.map