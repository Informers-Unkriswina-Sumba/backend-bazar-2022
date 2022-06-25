import Produk from '../../../models/product';

export const createProdukKelompok8Seeds = async () => {
  // const hashPass: any = await hashingPassword(payload.password);
  // payload.password = hashPass;
  const lapakId = '62b53fec27ea5275f8cfb3a9';

  const produkData: any[] = [
    [
      {
        gambar: [
          'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        ],
        nama: 'Pentol mercon',
        minimalPembelian: 0,
        harga: 0,
        satuan: '',
        deskripsi: `<p>Manfaat daging sapi dalam pembuatan pentol mercon yaitu kaya nutrisi seperti:</p>
        <p>1. sumber protein merupakan nutrisi yang membantu tubuh untuk membuat dan membantu tubuh untuk membuat dan memperbaiki tulang,tulang rawan dan juga kulit.</p>
        <p>2. kaya mineral</p>
        <p>3. meningkatkan imunitas</p>
        <p>4.membantu mencegah anamia</p>
        <p>5.sumber vitamin</p>
        <p>6.meningkatkan stamina</p>
        <p>&nbsp;</p>
        <p>Langkah-langkah pengolahan:</p>
        <p>1.Pentol : Masukan daging dan es batu kedalam blender/ food processors. Blender hingga halus. Kemudian masukan sisa bahan lainnya. Blender lagi sampai halus.</p>
        <p>2.Genggam adonan dengan tangan kiri, sendok satu per satu ke dalam air panas (air yang sudah mendidih dan kompor dimatikan), indikasi matang adalah apabila pentol sudah mengapung. Angkat pentol lalu tiriskan, sisihkan.</p>
        <p>3. Mercon : masukan semua bahan sambal yang sudah di rebus terlebih dahulu ke dalam chopper/blender kemudian blender sebentar aja (jangan terlalu halus).</p>
        <p>4. Tumis sambalnya dengan daun jeruk dan lengkuas hingga harum, kemudian masukan gula merah dan garam, aduk rata. Tambahkan air secukupnya dan pentol. Masak hingga air menyusut dan kental. Angkat.</p>
        <p>5. Sajikan</p>`,
        lapak: lapakId,
        isSuspended: false,
        createdAt: new Date(),
        type: 'barang', // barang | jasa
      },
      {
        gambar: [
          'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        ],
        nama: 'Piscok',
        minimalPembelian: 0,
        harga: 0,
        satuan: '',
        deskripsi: `<p>Manfaat piscok yaitu</p>
        <p>1. mengandung lebih banyak kalium untuk mengontrol tekanan darah</p>
        <p>2. meningkatkan kemampuan sistem kekebalan tubuh untuk melawan sel tumor.</p>
        <p>3. sumber energi bahi tubuh 4.meningkatkan imunisasi terhadap anemia. 5.dapat mengurangi depresi. Langkah-langkah pengolahan piscok -Langkah _pengolahan Kupas pisang, potong Isi kulit lumpia dengan potongan pisang Tambahkan Frisian Flag Kental Manis Cokelat yang Nikmat, dan keju parut Olesi pinggir dengan air Lipat hingga tertutup Goreng hingga kecoklatan Tambahkan keju parut</p>`,
        lapak: lapakId,
        isSuspended: false,
        createdAt: new Date(),
        type: 'barang', // barang | jasa
      },
      {
        gambar: [
          'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        ],
        nama: 'Pop ice',
        minimalPembelian: 0,
        harga: 0,
        satuan: '',
        deskripsi: `<p>Manfaat pop ice:</p>
        <p>Manfaat kandungan pop ice Rasa coklat bagi kesehatanmu:</p>
        <p>A. Gula : Membuat tubuhmu lebih berenergi. Menyimpan energi sebagai lemak yang sehat. Memperbaiki suasana hati dan membuat bahagia, Menyimpan energi sebagai lemak yang sehat dan Memperbaiki suasana hati dan membuat bahagia.</p>
        <p>a. Krimer:</p>
        <p>b. Kakao bubuk: Membantu Menurunkan Berat Badan. Manfaat lain dari bubuk kakao adalah membantu dalam mengatur berat badan dengan mengurangi nafsu makan, mengatur penggunaan energi dan meningkatkan oksidasi lemak dan perasaan kenyang, Meningkatkan Fungsi Otak, Mengobati Asma, Kesehatan Mulut, Memperbaiki Kulit</p>
        <p>c. Padatan susu: memiliki banyak nutrisi penting yang dapat menunjang pertumbuhan tulang, gigi, kuku dan rambut yang baik. Kalsium tidak hanya baik untuk pertumbuhan tulang pada anak-anak, namun demikian juga pada orang dewasa sangat dibutuhkan untuk menjaga kekuatan tulang dan mencegah terjadinya resiko osteoporosis.</p>
        <p>d. Perisa Bubuk: Minyak esensialnya mampu mencegah infeksi bakteri, Sebagai antioksidan dapat mencegah kanker, Memiliki kandungan mineral magnesium dan pottasium, Mengurangi kadar kolesterol sehingga menurunkan resiko penyakit jantung, Mencegah rambut rontok.</p>
        <p>e. Pemanis Buatan: Pemanis buatan dapat menjadi alternatif yang baik jika Anda memiliki diabetes. Tidak seperti gula, pemanis buatan umumnya tidak meningkatkan kadar gula darah karena mereka tidak memiliki karbohidrat.</p>
        <p>f. Perisa Alami:menambah nafsu makan/minum.</p>
        <p>&nbsp;</p>
        <p>Langkah langah pengolahan cara pengolahan minuman pop ice:</p>
        <p>1. Tuangkan bubuk pop ice Hal yang paling umum di lakukan pada saat membuat pop ice adalah memasukkan bubuk pop ice terlebih dahulu karena paling mudah cepat.</p>
        <p>2. Masukkan es dan air Cara ini bisa dilakukan terlebih dahulu adalah es dimasukkan ke dalam cangkir kemudian air dalam menggunakan takaran yang sesuai dengan cangkir atau gelas plastik. Atau air dahulu yang di masukkan kemudian baru es yang dimasukkan.</p>
        <p>3. Dicampur ke dalam blender Barulah air di tambah es dan bubuk pop ice lalu di blender kemudian di tunggu 1 menit agar hasil blender lebih bagus</p>
        <p>4. memasukkan susu kental manis kedalam cup atau gelas plastik dengan cara melelehkan susu kental manis secara melingkar ke dalam gelas agar terlihat menarik, lalu Setelah itu barulah pop ice yang sudah di blender di masukkan ke dalam gelas plastik/cup kemudian tabur mesis ceres di tasnya agar terlihat menarik dan memiliki cita rasa yang enak.</p>`,
        lapak: lapakId,
        isSuspended: false,
        createdAt: new Date(),
        type: 'barang', // barang | jasa
      },
    ],
  ];
  for (const produk of produkData) {
    await Produk.create(produk);
  }
  console.log('successfully running produk kelompok 8 seeds');
};
