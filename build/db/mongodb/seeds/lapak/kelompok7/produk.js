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
exports.createProdukKelompok7Seeds = void 0;
const product_1 = __importDefault(require("../../../models/product"));
const createProdukKelompok7Seeds = () => __awaiter(void 0, void 0, void 0, function* () {
    // const hashPass: any = await hashingPassword(payload.password);
    // payload.password = hashPass;
    const lapakId = '62b53fed27ea5275f8cfb3b1';
    const produkData = [
        {
            gambar: [
                'https://backend.unwinapreneur.com/uploads/kelompok-7-esjeruk.jpeg',
            ],
            nama: 'Es Jeruk',
            minimalPembelian: 1,
            harga: 0,
            satuan: '',
            deskripsi: `    
      <p style="text-align:center"><span style="color:#ecf0f1"><strong><span style="font-size:28px"><span style="background-color:#ff00ff">Es Jeruk</span></span></strong></span></p>

      <p><span style="color:#ecf0f1"><strong><span style="font-size:20px"><span style="background-color:#ff00ff">Bahan yang dibutuhkan :</span></span></strong></span></p>

      <ul>
        <li><span style="font-size:16px">Jeruk peras segar sebanyak 5 buah </span></li>
        <li><span style="font-size:16px">Es batu secukupnya </span></li>
        <li><span style="font-size:16px">Air matang secukupnya</span></li>
        <li><span style="font-size:16px">Gula cair sebanyak 35 ml </span></li>
        <li><span style="font-size:16px">Susu kental manis putih sebanyak 25 ml</span></li>
      </ul>

      <p><span style="color:#ecf0f1"><strong><span style="font-size:20px"><span style="background-color:#ff00ff">Cara Membuat Jus Jeruk Peras:</span></span></strong></span></p>

      <ol>
        <li style="text-align: justify;"><span style="font-size:16px">Langkah pertama ambil jeruk yang anda pilih. Sebelum mengolah jeruk menjadi jus jeruk, pastikan dahulu bahwa jeruk yang anda pilih adalah jeruk yang matang serta memiliki rasamanis. Jeruk matang ditandai dengan warna kulit jeruk yang kuning dan permukaan kulit yang mengilat. Bau jeruk juga sangat harum serta tekstur jeruk yang sedikit lebih lunak. Belah jeruk tersebut hingga menjadi 2bagian yang sama besar.</span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Ambil blender dan peras jeruk tadi hingga airnya keluar dan tampung dalam gelas blender. Sebaiknya anda menggunakan saringan untuk memisahkan antara air jeruk serta biji jeruk. Biji jeruk yang ikut terolah akan memberikan rasa pahit yang tentu saja akan merusak rasa dari jus jeruk nantinya.</span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Di dalam gelas blender tadi masukan bahan-bahan lain seperti air matang dan gula cair. Hidupkan blender dan haluskan bahan-bahan tersebut hingga menyatu dan lembut.</span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Tuangkan air jeruk yang sudah di blender tadi pada gelas saji. Tambahkan susu kental manis putih dan es batu secukupnya. jus jeruk peras siap untuk dinikmati.</span></li>
      </ol>

      <p style="text-align:justify"><span style="color:#ecf0f1"><strong><span style="font-size:20px"><span style="background-color:#ff00ff">Manfaat Es Batu Terkait Penanganan Berbagai Penyakit Ada berbagai manfaat es batu dalam meredakan atau meringankan berbagai penyakit, yaitu:</span></span></strong></span></p>

      <ol>
        <li style="text-align: justify;"><span style="font-size:16px">Nyeri tumit (plantar fasciitis) Es batu diketahui dapat mencegah&nbsp;nyeri tumit&nbsp;menjadi lebih parah dan meredakan peradangan akibat aktivitas atau tekanan berlebih pada plantar fascia, yaitu jaringan ikat atau ligamen yang menghubungkan tulang tumit ke jari-jari kaki dan menopang lengkung kaki. Terapi es batu untuk meredakan nyeri tumit dapat dilakukan dengan cara kompres atau rendam. Untuk cara kompres, Anda bisa melakukannya dengan meletakkan es yang sudah dihancurkan di dalam kantong plastik atau botol. Selanjutnya, kompres area tumit yang nyeri selama 15&ndash;20 menit, sebanyak 3&ndash;4 kali sehari. Untuk cara rendam, Anda bisa mengisi baskom ukuran dangkal dengan air dan es batu, lalu rendam tumit selama 10&ndash;15 menit. Lakukan beberapa kali dalam sehari dan pastikan jari-jari kaki tidak ikut terendam air es. Namun, ada satu hal yang perlu selalu Anda ingat, jangan pernah menempelkan es batu secara langsung pada tumit atau bagian tubuh mana pun yang mengalami nyeri atau cedera. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Keracunan makanan Keracunan makanan&nbsp;terjadi akibat mengonsumsi makanan atau minuman yang sudah terkontaminasi bakteri&nbsp;Salmonella. Bakteri ini umumnya dapat ditemukan di makanan mentah atau tidak dimasak hingga matang dan makanan atau minuman yang tidak melalui proses pasteurisasi. Salah satu&nbsp;keracunan makanan akibat bakteri&nbsp;Salmonella&nbsp;adalah sering buang air besar atau&nbsp;diare.&nbsp;Nah, salah satu cara untuk mengatasi kondisi ini adalah dengan banyak minum air dan mengisap es batu guna mengganti cairan tubuh yang hilang. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Gigitan atau sengatan serangga Es batu juga diketahui dapat meredakan gatal, bengkak, kemerahan, atau nyeri pada kulit akibat&nbsp;gigitan nyamuk. Anda hanya perlu mengompres bagian yang sakit dengan handuk basah atau&nbsp;ice pack&nbsp;selama beberapa menit. Namun, jika Anda tersengat lebah atau binatang berbahaya lain dan muncul gejala berat, seperti&nbsp;sesak napas&nbsp;dan&nbsp;pusing,&nbsp;disarankan untuk segera pergi ke rumah sakit guna mendapatkan penanganan lebih lanjut. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Gusi bengkak Rasa&nbsp;nyeri atau&nbsp;bengkak pada gusi&nbsp;dapat diredakan dengan memanfaatkan es batu, setidaknya sampai Anda ke dokter gigi. Es batu juga dapat menjadi salah satu pilihan&nbsp;obat sakit gigi untuk anak alami. Caranya adalah dengan meletakkan es batu di dalam mulut, tepatnya di atas daerah yang sakit. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Cedera atau radang sendi Es batu&nbsp;sudah sejak lama digunakan untuk meredakan pembengkakan dan peradangan akibat cedera atau kondisi lain, seperti&nbsp;radang sendi. Caranya adalah dengan mengompres daerah yang bengkak atau sakit dengan handuk basah atau es yang sudah dibungkus dengan handuk selama 10&ndash;15 menit. Lakukan kompres beberapa kali dalam sehari. Selain itu,&nbsp;kompres&nbsp;menggunakan es batu juga dapat membantu Anda&nbsp;menghilangkan jerawat dalam semalam&nbsp;maupun meredakan memar. Bagi Anda yang ingin memanfaatkan es batu untuk berbagai keluhan di atas, selalu ingat untuk tidak menaruh es batu secara langsung pada kulit, terutama pada luka terbuka. Anda bisa meletakkan kain bersih di antara kulit dan es batu. Selain itu, jangan menaruh es batu pada kulit selama lebih dari 15&ndash;20 menit. Manfaat es batu memang tidak perlu diragukan lagi. Namun, jika nyeri, peradangan, atau pembengkakan tidak kunjung membaik setelah menggunakan es batu, jangan ragu untuk segera memeriksakan diri ke&nbsp;dokter&nbsp;agar mendapatkan penanganan&nbsp;yang tepat.</span></li>
      </ol>

      <p style="text-align:justify"><span style="color:#ecf0f1"><strong><span style="font-size:20px"><span style="background-color:#ff00ff">Manfaat jeruk nipis Berikut ini adalah manfaat yang bisa didapat ketika Anda menambahkan perasan air jeruk nipis ke dalam air putih untuk dikonsumsi:</span></span></strong></span></p>

      <ol>
        <li style="text-align: justify;"><span style="font-size:16px">Meremajakan kulit Jeruk nipis mengandung vitamin C dan flavonoid yang merupakan antioksidan untuk memperkuat kolagen. Minum air jerus nipis juga dapat menghidrasi tubuh dan meremajakan kulit. Namun tidak disarankan untuk mengoleskan air jeruk nipis langsung ke kulit Anda. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Meningkatkan pencernaan Perasan air jeruk nipis bersifat asam, sehingga dapat membantu air liur memecah makanan untuk pencernaan menjadi lebih baik. Selain itu, kandungan flavonoid dalam jeruk nipis dapat merangsang sekresi cairan pencernaan. Keasaman pada jerus nipis juga dapat membersihkan sistem ekskresi dan merangsang aktivitas usus, sehingga baik untuk mengatasi sembelit. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Meningkatkan kekebalan tubuh Kandungan vitamin C dan antioksidan dalam jeruk nipis dapat memperkuat sistem kekebalan tubuh dan membantu melawan infeksi seperti virus flu dan pilek. Selain itu, dua kandungan tersebut juga dapat mempersingkat durasi suatu penyakit. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Menurunkan berat badan Manfaat lain dari jeruk nipis adalah membantu mengatur berat badan. Kandungan asam sitrat dapat meningkatkan metabolisme serta membantu membakar lebih banyak kalori dan menyimpan sedikit lemak. Anda dapat meminum air jeruk nipis setiap pagi atau mengisap irisan jeruk nipis sebelum makan untuk meningkatkan metabolisme tubuh. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Menurunkan kadar gula darah Jeruk nipis dapat membantu penderita diabetes.</span></li>
      </ol>
      `,
            lapak: lapakId,
            isSuspended: false,
            createdAt: new Date(),
        },
        {
            gambar: [
                'https://backend.unwinapreneur.com/uploads/kelompok-7-lemet-ubi.jpeg',
            ],
            nama: 'LEMET UBI',
            minimalPembelian: 1,
            harga: 0,
            satuan: '',
            deskripsi: `
      <p style="text-align:center"><span style="color:#ecf0f1"><span style="font-size:28px"><span style="background-color:#ff00ff">LEMET UBI</span></span></span></p>
      
      <p><span style="color:#ecf0f1"><strong><span style="font-size:20px"><span style="background-color:#ff00ff">Bahan :</span></span></strong></span></p>
      
      <ul>
        <li><span style="font-size:16px">Ubi kayu </span></li>
        <li><span style="font-size:16px">Kelapa </span></li>
        <li><span style="font-size:16px">Gula merah </span></li>
        <li><span style="font-size:16px">Gula pasir </span></li>
        <li><span style="font-size:16px">Tepung tapioka secukup </span></li>
        <li><span style="font-size:16px">Garam secukupnya </span></li>
        <li><span style="font-size:16px">Vanila secukupnya </span></li>
        <li><span style="font-size:16px">Daun pisang</span></li>
      </ul>
      
      <p><span style="color:#ecf0f1"><strong><span style="font-size:20px"><span style="background-color:#ff00ff">Cara pengolahan :</span></span></strong></span></p>
      
      <ol>
        <li><span style="font-size:16px">Parut kelapa dan ubi kayu.</span></li>
        <li><span style="font-size:16px">Selesai parut kedua bahan tersebut, kita mulai mencampurkan semua bahan dari ubi parut, kelapa parut, gula merah, gula pasir, tepung tapioka secukupnya, garam secukupnya, serta vanila secukupnya dalam 1 wadah, aduk semua bahan akan tercampur rata.</span></li>
        <li><span style="font-size:16px">Setelah itu siapkan selembar daun pisang lalu ambl adonan lemetnya sesuai takaran di atas daun pisang, kemudian di lipat/gulung dengan rapi Ulangi sampai semua adonan hbis.</span></li>
        <li><span style="font-size:16px">Setelah siapkan alat kukus, lalu semua adonan yg sudah d bngkus truh ke dlam tmpt kukusan, kemudia di kukus smpai matang.</span></li>
        <li><span style="font-size:16px">Setelah matang siap di sajikan</span></li>
      </ol>
      `,
            lapak: lapakId,
            isSuspended: false,
            createdAt: new Date(),
        },
        {
            gambar: [
                'https://backend.unwinapreneur.com/uploads/kelompok-7-keripik-sukun.jpg',
            ],
            nama: 'KERIPIK SUKUN',
            minimalPembelian: 1,
            harga: 0,
            satuan: '',
            deskripsi: `
      <p>&nbsp;</p>
      
      <p style="text-align:center"><span style="color:#ecf0f1"><strong><span style="font-size:28px"><span style="background-color:#ff00ff">KERIPIK SUKUN</span></span></strong></span></p>
      
      <p><span style="color:#ecf0f1"><span style="font-size:20px"><strong><span style="background-color:#ff00ff">Bahan-bahan:</span></strong></span></span></p>
      
      <ul>
        <li><span style="font-size:16px">1 buah sukun ukuran sedang secukupnya </span></li>
        <li><span style="font-size:16px">Garam secukupnya </span></li>
        <li><span style="font-size:16px">Margarin </span></li>
        <li><span style="font-size:16px">Minyak untuk menggoreng </span></li>
        <li><span style="font-size:16px">Air untuk meredam irisan sukun secukupnya</span></li>
      </ul>
      
      <p><span style="color:#ecf0f1"><strong><span style="font-size:20px"><span style="background-color:#ff00ff">Langkah:</span></span></strong></span></p>
      
      <ol>
        <li style="text-align: justify;"><span style="font-size:16px">Kupas sukun, belah jadi 4 bagian lalu buang tengahnya. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Kemudian iris tipis sukun hingga habis &amp; rendam dalam air agar getahnya hilang. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Panaskan minyak dengan api sedang, kemudian masukan 1 sdt margarin &amp; 1/2 sdt garam lalu masukan sukun sukun secukupnya. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Goreng sukun hingga kuning keemasan, jangan lupa bolak balik yaa agar tidak gosong, jangan sampe kecoklatan karena akan terasa agak pahit. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Lakukan penggorengan hingga habis, &amp; setiap langkah menggoreng sebelum memasukan sukun beri margarin &amp; garam terlebih dahulu. Manfaat Buah Sukun bagi Kesehatan Selain buahnya yang kaya akan nutrisi, daun, batang, dan akar buah sukun juga dapat memberikan manfaat kesehatan.</span></li>
      </ol>
      
      <p><span style="color:#ecf0f1"><strong><span style="font-size:20px"><span style="background-color:#ff00ff">Berikut ini adalah beberapa manfaat buah sukun yang perlu Anda ketahui:</span></span></strong></span></p>
      
      <ol>
        <li style="text-align: justify;"><span style="font-size:16px">Menurunkan gula darah Berdasarkan suatu penelitian pada hewan percobaan, diketahui bahwa buah sukun dapat menurunkan&nbsp;kadar gula darah&nbsp;dan mencegahnya tetap stabil. Selain itu, buah sukun juga memiliki&nbsp;indeks glikemik&nbsp;rendah, yaitu 23&ndash;60. Dengan begitu, konsumsi buah sukun tidak akan cepat memengaruhi kenaikan kadar gula dalam darah. Penemuan ini juga menunjukkan bahwa buah sukun memiliki potensi sebagai pengobatan bagi penderita&nbsp;diabetes. Meski demikian, masih dibutuhkan penelitian lebih lanjut untuk memastikan klaim tersebut. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Memenuhi kebutuhan diet bebas gluten Buah sukun cocok untuk dijadikan alternatif bahan makanan bagi orang yang menghindari&nbsp;asupan gluten. Hal ini karena buah sukun tidak mengandung gluten, sehingga cocok untuk orang yang sensitif terhadap kandungan tersebut, misalnya penderita&nbsp;penyakit celiac. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Mengurangi peradangan Studi menunjukkan bahwa kandungan antioksidan pada buah sukun dapat mengurangi aktivitas sel-sel tubuh yang berperan dalam proses peradangan. Selain itu, ekstrak daun buah sukun juga efektif mengurangi pembengkakan yang terjadi akibat peradangan. Sekali lagi, studi itu pun masih sebatas pada hewan percobaan dan memerlukan penelitian lebih lanjut. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Melindungi kesehatan jantung Sebuah penelitian mengungkapkan bahwa manfaat buah sukun dapat menurunkan risiko&nbsp;penyakit jantung. Hal ini diduga berasal dari kandungan antioksidan pada buah sukun yang dapat mengurangi kolesterol jahat dalam darah, mencegah penyumbatan di pembuluh darah jantung, dan menurunkan tekanan darah. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Meningkatkan kesehatan mata Manfaat buah sukun berikutnya adalah mendukung&nbsp;kesehatan mata&nbsp;karena kandungan karotenoid di dalamnya. Makanan kaya akan karotenoid, seperti buah sukun, dianggap bisa melindungi sel-sel sehat pada mata dan mencegah&nbsp;degenerasi makula, yaitu salah satu penyebab utama kebutaan. Buah sukun memang baik untuk kesehatan. Namun, sebaiknya jangan mengonsumsinya secara berlebihan, karena dapat meningkatkan risiko terjadinya perdarahan dan tekanan darah rendah, terutama pada orang yang sedang menggunakan obat&nbsp;antihipertensi. Meski sudah banyak diteliti, tetapi secara klinis manfaat buah sukun sebagai pengobatan penyakit belum dapat dipastikan. Oleh karena itu, konsultasikan ke&nbsp;dokter&nbsp;lebih dulu jika Anda ingin memanfaatkan buah sukun sebagai pendamping pengobatan yang sedang dijalani.</span></li>
      </ol>
      `,
            lapak: lapakId,
            isSuspended: false,
            createdAt: new Date(),
        },
    ];
    for (const produk of produkData) {
        yield product_1.default.create(produk);
    }
    console.log('successfully running produk kelompok 7 seeds');
});
exports.createProdukKelompok7Seeds = createProdukKelompok7Seeds;
//# sourceMappingURL=produk.js.map