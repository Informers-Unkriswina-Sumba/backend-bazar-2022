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
exports.createLapakSeeds = void 0;
const lapak_1 = __importDefault(require("../models/lapak"));
const createLapakSeeds = () => __awaiter(void 0, void 0, void 0, function* () {
    // const hashPass: any = await hashingPassword(payload.password);
    // payload.password = hashPass;
    const pelapakData = [
        {
            namaKelompok: 'Kelompok 10',
            namaLapak: 'NUKE 10',
            slugName: 'nuke_10',
            penanggungJawab: 'Adipapa Katanga Mutu',
            deskripsi: 'Lapak NUKE adalah lapak kelompok 10 yg bertujuan untuk menjalankan beberapa usaha dalam Basar technopreneurship. Lapak NUKE di artikan dalam nama usaha yg akan di jalankan yaitu Naget pisang, Ubi goreng, Kolak, Es kacang ijo. Keunggulan dari lapak NUKE adalah dapat memberikan kepuasan kepada pelanggan dengan usaha yg kami jalankan, disisi lain lapak NUKE terkenal dengan Naget pisangnya yg gurih dan enak dan dijamin memuaskan pelanggan.',
            logo: 'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            isSuspended: false,
            createdAt: new Date(),
        },
        {
            namaKelompok: 'Kelompok 8',
            namaLapak: 'Sumber Rejeki Tekhno',
            slugName: 'sumber_rejeki_tekhno',
            penanggungJawab: 'Nuryanti kareri hara',
            deskripsi: 'Sumber rejeki itu banyak arti : Konsumen adalah sumber Rejeki bagi kami dan kami adalah sumber pengetahuan bagi konsumen.',
            logo: 'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            isSuspended: false,
            createdAt: new Date(),
        },
        {
            namaKelompok: 'Kelompok 9',
            namaLapak: 'Tiga Sekawan',
            slugName: 'tiga_sekawan',
            penanggungJawab: 'Joshua Roberts Tamu Umbu',
            deskripsi: 'Lapak Tiga Sekawan, keunggulan menjual makanan sehat bergizi dan baik untuk kesehatan tubuh, serta memiliki harga yang terjangkau...',
            logo: 'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            isSuspended: false,
            createdAt: new Date(),
        },
        {
            namaKelompok: 'Kelompok 5',
            namaLapak: 'Simple Food Tecno',
            slugName: 'simple_food_tecno',
            penanggungJawab: 'Kasimirus Richard Latunussa',
            deskripsi: 'Sesuai dengan nama lapak yaitu Simple Food Tecno, kami membuat daftar menu yang sangat sederhana, dan menjadi salah satu makanan sehari-hari yang juga mudah untuk dibuat, akan tetapi dari beberapa menu makanan yang sederhana ini terkandung banyak sekali vitamin, dan gizi seimbang. Dan yang membedakan ialah terdapat sistem teknologi yang mendukung kami, dalam melalukan pemasaran serta menjelaskan kasiat dan Angka Kecukupan Gizi dari menu-menu yang terdapat di lapak kami.',
            logo: 'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            isSuspended: false,
            createdAt: new Date(),
        },
        {
            namaKelompok: 'Kelompok 2',
            namaLapak: 'TECHMATT',
            slugName: 'techmatt',
            penanggungJawab: 'Faldi Eduard Tetelepta',
            deskripsi: `Selamat datang di lapak Techmatt. Techmatt adalah salah satu lapak yang dibuat dengan gabungan tiga program studi yaitu agribisnis, Teknik hasil perikanan dan Teknik informatika dengan Penjualan berbasis teknologi. Techmatt menyediakan 2 produk makanan yang memiliki gizi, serat dan banyak lagi manfaat bagi para konsumennya, yaitu salad buah dan ayam rica-rica. Tecmatt juga mempunyai digital yaitu editing foto menggunakan aplikasi adobe lightroom mobile.\n\nPelayanan pelanggan:\nHari jumat dan sabtu mulai jam 10am-8pm\n\nSemua produk ready ya`,
            logo: 'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            isSuspended: false,
            createdAt: new Date(),
        },
        {
            namaKelompok: 'Kelompok 7',
            namaLapak: 'Smart Food',
            slugName: 'smart_food',
            penanggungJawab: 'Leonard Rihi',
            deskripsi: `Kami menawarkan beberapa cemilan dan minuman\nSeperti, lembek ubi, keripik sukun dan minuman es jeruk\nDan disini juga kami menawarkan edukasi yang dimana belajar menggunakan kamera DSLR dan belajar menggunakan aplikasi Kinemaster untuk mengedit video`,
            logo: 'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            isSuspended: false,
            createdAt: new Date(),
        },
        {
            namaKelompok: 'Kelompok 6',
            namaLapak: 'MaGeR',
            slugName: 'mager',
            penanggungJawab: 'VICTOR IAMNUEL MESA MILLA',
            deskripsi: `Adapun nama lapak dari kelompok kami yaitu\n(MAGER) yang mengandung arti Nama Lapak:\n (MAHASISWA GENERASI  TECNHOPRENEURSHIP)\nDalam hal ini mahasiswa  dapat meningkatkan jiwa jiwa bisnis dalam berwira usaha dan bisa mencipatakan lapangan kerja baru jika sudah lulus nanti tanpa harus perpatokan pada jurusan yang di ambil.`,
            logo: 'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            isSuspended: false,
            createdAt: new Date(),
        },
        {
            namaKelompok: 'Kelompok 3',
            namaLapak: 'Squad Three Techno',
            slugName: 'squad_three_techno',
            penanggungJawab: 'Antonius Kalukur Lidjang',
            deskripsi: `"Harga produk:\n\nKlepon 5.000/mika\npembelian 2 mika gratis 1 cup kopi\n\nTahu popcorn\n5.000/Cup\n1.\tKlepon \nKelpon adalah sejenis makanan tradisional atau kue tradisional Indonesia yang termasuk ke dalam kelompok jajanan pasar. Makanan enak ini terbuat dari tepung beras ketan yag dibentuk seperti bola-bola kecil dan diisi dengan gula merah lalu direbus di dalam air mendidih.\n•\tKandungan dari klepon \nJika mengonsumsi 4 butir klepon saja dalam sekali makan, maka total kalori yang kamu dapatkan adalah sekitar 400 kalori. Selain itu, dalam satu butir klepon juga terdapat 2.8 gram lemak, 19.75 gram karbohidrat, dan 1.42 gram protein.\n•\tManfaat klepon \nKlepon memiliki senyawa niacin yang membantu sistem pencernaan menjadi lebih lancar. Dengan sistem pencernaan lebih lancar akan membuat tubuh terhindar dari berbagai macam jenis penyakit seperti sembelit. \n\n2.\tTahu Popcorn \nTahu popcorn merupakan jajanan kekinian yang banyak diminati oleh anak muda zaman sekarang.  Tahu popcorn merupakan jajanan yang terbuat dari bahan dasar tahu, sosis, telur, terigu dan bumbu lainnya yang digabung menjadi satu adonan kemudian dibentuk menjadi bola-bola kecil menyerupai popcorn dan digoreng.\n•\tKandungan dari Tahu Popcorn\nTahu popcorn mengandung banyak protein karena bahan-bahan yang digunakan memiliki kandungan protein yang cukup tinggi contohnya tahu, telur, dan tepung. Tahu popcorn  juga mengandung beragam nutrisi, seperti karbohidrat , serat, lemak, asam amino esensial dan berbagai mineral, seperti kalsium, selenium, fosfor, magnesium, dan zat besi. \n•\tManfaat Tahu Popcorn\n-\tMencegah risiko serangan jantung \n-\tMengurangi risiko kanker \n-\tMenurunkan berat badan \n-\tMelancarkan pencernaan \n-\tMencegah risiko diabetes tipe 2 \n-\tMengurangi gejala menopause \n-\tMencegah osteoporosis \n-\tMenjaga fungsi kognitif otak \n-\tMengurangi penuaan kulit \n-\tMenurunkan kolesterol \n\n"`,
            logo: 'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            isSuspended: false,
            createdAt: new Date(),
        },
        {
            namaKelompok: 'Kelompok 4',
            namaLapak: 'InThAg Techno',
            slugName: 'inthag_techno',
            penanggungJawab: 'NOBERTO DJAMI NULI',
            deskripsi: 'Ada dua jenis kegiatan di lapak, pertama Jualan produk. Kedua ada edukasi (ada ruang dalam lapak yang istrinya beberapa laptop dan HP)',
            logo: 'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            isSuspended: false,
            createdAt: new Date(),
        },
        {
            namaKelompok: 'Kelompok 1',
            namaLapak: 'Group One Les',
            slugName: 'group_one_les',
            penanggungJawab: 'Aner Rada Ndima',
            deskripsi: '',
            logo: 'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            isSuspended: false,
            createdAt: new Date(),
        },
    ];
    for (const lapak of pelapakData) {
        yield lapak_1.default.create(lapak);
    }
    console.log('successfully running lapak seeds');
});
exports.createLapakSeeds = createLapakSeeds;
//# sourceMappingURL=lapak.js.map