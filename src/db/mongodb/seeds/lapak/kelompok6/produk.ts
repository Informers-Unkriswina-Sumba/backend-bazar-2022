import Produk from '../../../models/product';

export const createProdukKelompok6Seeds = async () => {
  // const hashPass: any = await hashingPassword(payload.password);
  // payload.password = hashPass;
  const lapakId = '62b53fed27ea5275f8cfb3b3';

  const produkData: any[] = [
    {
      gambar: [
        'https://backend.unwinapreneur.com/uploads/kelompok-6-es-lilin.png',
      ],
      nama: 'Es Lilin',
      minimalPembelian: 1,
      harga: 0,
      satuan: '',
      deskripsi: `
      <p><span style="font-size:28px"><span style="color:#d35400"><strong>ES LILIN</strong></span></span></p>
      
      <p><span style="font-size:16px">Kacang hijau ini termasuk ke dalam jenis kacang-kacangan yang merupakan sumber protein yang sangat baik. Selain Rendah lemak, kacang hijau juga mengandung banyak serat serta antioksidan. Kacang hijau juga mengandung kalsium, zat besi, zinc, kalium, fosfor, vitamin A, vitamin B, folat, vitamin C, vitamin E, dan vitamin K. Ragam nutrisi lain yang ada dalam kacang hijau adalah mangan, selenium, magnesium, dan karbohidrat yang tentunya akan memberikan banyak manfaat bagi tubuh.</span></p>
      
      <p><span style="color:#d35400"><strong><span style="font-size:20px">Bahan:</span></strong></span></p>
      
      <ul>
        <li><span style="font-size:16px">Kacang hijau</span></li>
        <li><span style="font-size:16px">Gula pasir</span></li>
        <li><span style="font-size:16px">Susu putih</span></li>
        <li><span style="font-size:16px">Santan.</span></li>
      </ul>
      
      <p><span style="color:#d35400"><span style="font-size:20px"><strong>Cara membuat:</strong></span></span></p>
      
      <ol>
        <li><span style="font-size:16px">Cuci bersih kacang hijau dengan air. Kemudian rebus dengan &frac12; liter air. Rebus hingga mendidih.</span></li>
        <li><span style="font-size:16px">Jika kacang hijau agak empuk, masukkan susu, gula pasir dan santan. Aduk-aduk hingga larut.</span></li>
        <li><span style="font-size:16px">Matikan kompor, biarkan dingin terlebih dahulu.</span></li>
        <li><span style="font-size:16px">Siapkan plastik es lilin. Masukkan kacang hijau ke dalam plastik sesuai keinginan kemudian ikat dengan tali. Lakukan pada kacang hijau yang masih tersisa.</span></li>
        <li><span style="font-size:16px">Masukkan ke dalam freezer selama semalaman.</span></li>
        <li><span style="font-size:16px">Dan es lilin kacang hijau siap dinikmati.</span></li>
      </ol>
      `,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
    },
    {
      gambar: [
        'https://backend.unwinapreneur.com/uploads/kelompok-6-kaparak.png',
      ],
      nama: 'Kaparak',
      minimalPembelian: 1,
      harga: 0,
      satuan: '',
      deskripsi: `
      <p style="text-align:center"><span style="color:#ecf0f1"><span style="font-size:36px"><span style="background-color:#d35400">KAPARAK</span></span></span></p>
      
      <p><span style="color:#ecf0f1"><strong><span style="font-size:20px"><span style="background-color:#d35400">Manfaat jagung :</span></span></strong></span></p>
      
      <ol>
        <li><span style="font-size:16px">Menyehatkan organ pencernaan.</span></li>
        <li><span style="font-size:16px">Menguatkan tulang.</span></li>
        <li><span style="font-size:16px">Menjadikan kulit awet muda.</span></li>
        <li><span style="font-size:16px">Mencegah anemia.</span></li>
        <li><span style="font-size:16px">Menyehatkan jantung.</span></li>
        <li><span style="font-size:16px">Menyehatkan mata.</span></li>
        <li><span style="font-size:16px">Meningkatkan kekebalan tubuh.</span></li>
      </ol>
      
      <p><span style="color:#ecf0f1"><strong><span style="font-size:20px"><span style="background-color:#d35400">Manfaat kacang:</span></span></strong></span></p>
      
      <ol>
        <li><span style="font-size:16px">Membangun dan memperbaiki sel-sel tubuh.</span></li>
        <li><span style="font-size:16px">Mencegah kolesterol tinggi.</span></li>
        <li><span style="font-size:16px">Melancarkan pencernaan.</span></li>
        <li><span style="font-size:16px">Menurunkan berat badan.</span></li>
        <li><span style="font-size:16px">Mengelola kadar gula darah.</span></li>
        <li><span style="font-size:16px">Menjaga kesehatan jantung.</span></li>
        <li><span style="font-size:16px">Pencegahan batu empedu.</span></li>
        <li><span style="font-size:16px">Mencegah bayi lahir cacat.</span></li>
      </ol>
      
      <p><span style="color:#ecf0f1"><strong><span style="font-size:20px"><span style="background-color:#d35400">Bahan:</span></span></strong></span></p>
      
      <ul>
        <li><span style="font-size:16px">Jagung</span></li>
        <li><span style="font-size:16px">Kacang</span></li>
        <li><span style="font-size:16px">Gula</span></li>
      </ul>
      
      <p><span style="color:#ecf0f1"><strong><span style="font-size:20px"><span style="background-color:#d35400">Cara membuat:</span></span></strong></span></p>
      
      <ol>
        <li><span style="font-size:16px">Jagung dan kacang di goreng secara terpisah tanpa minyak.</span></li>
        <li><span style="font-size:16px">Setelah itu dingin kan. Dan di tumbuk sampai halus.</span></li>
        <li><span style="font-size:16px">Setelah itu, di campur dengan gula pasir.</span></li>
        <li><span style="font-size:16px">Bungkus sesuai ukuran.</span></li>
      </ol>
      `,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
    },
    {
      gambar: ['https://backend.unwinapreneur.com/uploads/kelompok-6-jagung'],
      nama: 'Jagung Goreng Pedis',
      minimalPembelian: 1,
      harga: 0,
      satuan: '',
      deskripsi: `
        <p>&nbsp;</p>

        <p style="text-align:center"><span style="color:#ecf0f1"><span style="font-size:28px"><strong><span style="background-color:#d35400">Jagung Goreng Pedis</span></strong></span></span></p>

        <p><span style="font-size:16px">Jagung goreng pedas adalah camilan tradisional yang kini sudah sangat mudah ditemukan di berbagai daerah di Indonesia. Dengan tekstur garing dan renyah, serta perpaduan rasa manis, gurih, dan sedikit pedas, makanan ringan ini kerap dijadikan oleh-oleh khas tradisional yang praktis untuk dibawa pulang.membuat jagung goreng pedas cukup sederhana, namun diperlukan kesabaran dan ketelatenan. jagung goreng pedas ini membutuhkan proses dan waktu yang cukup lama sampai kita bisa mengkonsumsinya.</span></p>

        <p><span style="color:#ecf0f1"><strong><span style="font-size:20px"><span style="background-color:#d35400">Manfaat:</span></span></strong></span></p>

        <ol>
          <li><span style="font-size:16px">Menyehatkan organ pencernaan.</span></li>
          <li><span style="font-size:16px">Menguatkan tulang.</span></li>
          <li><span style="font-size:16px">Menjadikan kulit awet muda. </span></li>
          <li><span style="font-size:16px">Mencegah anemia. </span></li>
          <li><span style="font-size:16px">Menyehatkan jantung. </span></li>
          <li><span style="font-size:16px">Menyehatkan mata. </span></li>
          <li><span style="font-size:16px">Meningkatkan kekebalan tubuh.</span></li>
        </ol>

        <p><span style="color:#ecf0f1"><strong><span style="font-size:20px"><span style="background-color:#d35400">Bahan yang digunakan:</span></span></strong></span></p>

        <ul>
          <li><span style="font-size:16px">1 kg jagung berkualitas bagus </span></li>
          <li><span style="font-size:16px">2 sdm garam </span></li>
          <li><span style="font-size:16px">Air secukupnya </span></li>
          <li><span style="font-size:16px">Minyak goreng secukupnya</span></li>
        </ul>

        <p><span style="color:#ecf0f1"><span style="font-size:20px"><span style="background-color:#d35400">Bumbu yang dihaluskan:</span></span></span></p>

        <ul>
          <li><span style="font-size:16px">5 butir bawang merah </span></li>
          <li><span style="font-size:16px">5 siung bawang putih </span></li>
          <li><span style="font-size:16px">&frac12; sdt merica </span></li>
          <li><span style="font-size:16px">2 sdm ebi, seduh </span></li>
          <li><span style="font-size:16px">Garam secukupnya</span></li>
        </ul>

        <p><span style="color:#ecf0f1"><strong><span style="font-size:20px"><span style="background-color:#d35400">Cara membuat:</span></span></strong></span></p>

        <ol>
          <li><span style="font-size:16px">Cuci bersih jagung, tiriskan sebentar.</span></li>
          <li><span style="font-size:16px">Rebus jagung bersama 3 liter air. Tambahkan garam. Aduk rata. Rebus hingga mendidih. </span></li>
          <li><span style="font-size:16px">Kecilkan api. Rebus selama 3-4 jam hingga jagung lunak, mekar, dan kulitnya terlepas. Angkat, tiriskan.</span></li>
          <li><span style="font-size:16px">Jemur hingga agak mengering. </span></li>
          <li><span style="font-size:16px">Campur jagung yang sudah dijemur dengan bumbu yang sudah dihaluskan. Aduk hingga benar-benar tercampur rata. </span></li>
          <li><span style="font-size:16px">Jemur kembali hingga kering. Angkat. </span></li>
          <li><span style="font-size:16px">Panaskan minyak. Goreng jagung hingga mekar dan berwarna kuning. Angkat, tiriskan.</span></li>
          <li><span style="font-size:16px">Masukan jagung pada toples agar tetap terjaga kerenyahannya. resep marning dengan rasa pedas</span></li>
        </ol>

        <p><span style="color:#ecf0f1"><span style="font-size:20px"><span style="background-color:#d35400">Bahan-bahan</span></span></span></p>

        <ul>
          <li><span style="font-size:16px">Jagung yang sudah dikeringkan </span></li>
          <li><span style="font-size:16px">3 siung bawang merah </span></li>
          <li><span style="font-size:16px">3 siung bawang putih (1 siungnya diiris) </span></li>
          <li><span style="font-size:16px">8 cabe rawit -1/4 batok gula merah </span></li>
          <li><span style="font-size:16px">Secukupnya air dan minyak</span></li>
        </ul>

        <p><span style="color:#ecf0f1"><span style="font-size:20px"><span style="background-color:#d35400">Langkah</span></span></span></p>

        <ol>
          <li><span style="font-size:16px">Ulek bawang merah, bawang putih, dan gula merah sampai benar-benar halus </span></li>
          <li><span style="font-size:16px">Iris bawang putih tipis, campurkan bersama jagung </span></li>
          <li><span style="font-size:16px">Panaskan minyak, masukkan bumbu halus yang sudah diulek. Aduk, tambahkan air sedikit saja. Aduk lagi sampai mendidih dan menjadi karamel. </span></li>
          <li><span style="font-size:16px">Masukkan jagung, aduk sampai semua bumbu merata.</span></li>
          <li><span style="font-size:16px">Angkat dan sajikan. Tidak perlu pakai garam karena jagungnya sudah asin.</span></li>
        </ol>
      `,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
    },
    {
      gambar: ['https://backend.unwinapreneur.com/uploads/kelompok-6-jus-buah'],
      nama: 'Es Buah',
      minimalPembelian: 1,
      harga: 0,
      satuan: '',
      deskripsi: `
      <p style="text-align:center"><span style="color:#ecf0f1"><strong><span style="font-size:28px"><span style="background-color:#d35400">ES JUS</span></span></strong></span></p>
      
      <p><span style="font-size:16px">Es Jas Jus ini sangat Cocok untuk di nikmati, seperti kita di daerah Panas. Selain memberikan kesegaran pada Tubuh, Es Jus ini juga mengandung Cita rasa yang berbeda-beda, kita bisa nikmati sesuai Rasa atau selera kita.</span></p>
      
      <p><span style="color:#ecf0f1"><strong><span style="font-size:20px"><span style="background-color:#d35400">Bahan-bahan :</span></span></strong></span></p>
      
      <ul>
        <li><span style="font-size:16px">Es batu Jas jus varian rasa buah Air putih</span></li>
      </ul>
      
      <p><span style="color:#ecf0f1"><strong><span style="font-size:20px"><span style="background-color:#d35400">Cara pembuatan:</span></span></strong></span></p>
      
      <ol>
        <li><span style="font-size:16px">Pertama-tama hancurkan es batu, lalu masukan dalam plastik tambahkan jas jus yang di inginkan lalu masukan air secukupnya.</span></li>
      </ol>`,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
    },
  ];
  for (const produk of produkData) {
    await Produk.create(produk);
  }
  console.log('successfully running produk kelompok 6 seeds');
};
