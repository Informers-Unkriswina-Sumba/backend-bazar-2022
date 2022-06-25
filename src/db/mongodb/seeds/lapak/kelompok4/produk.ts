import Produk from '../../../models/product';

export const createProdukKelompok4Seeds = async () => {
  // const hashPass: any = await hashingPassword(payload.password);
  // payload.password = hashPass;
  const lapakId = '62b53fed27ea5275f8cfb3b7';

  const produkData: any[] = [
    {
      gambar: [
        'https://backend.unwinapreneur.com/uploads/kelompok-4-cumi-goreng.jpg',
      ],
      nama: 'Cumi Goreng',
      minimalPembelian: 1,
      harga: 0,
      satuan: '',
      deskripsi: `<p>&nbsp;</p>
      <p style="text-align:center"><span style="color:#ffffff"><strong><span style="font-size:28px"><span style="background-color:#011f6d">Cumi Goreng</span></span></strong></span></p>
      
      <p><span style="color:#ffffff"><strong><span style="font-size:20px"><span style="background-color:#011f6d">Bahan-bahan :</span></span></strong></span></p>
      
      <ul>
        <li><span style="font-size:16px">1kg Cumi segar sotong</span></li>
        <li><span style="font-size:16px">Kentang</span></li>
        <li><span style="font-size:16px">Wortel</span></li>
        <li><span style="font-size:16px">Kacang panjang</span></li>
        <li><span style="font-size:16px">Daun bawang</span></li>
        <li><span style="font-size:16px">Tomat</span></li>
        <li><span style="font-size:16px">Tusukan gigi</span></li>
        <li><span style="font-size:16px">Minyak goreng secukupnya</span></li>
        <li><span style="font-size:16px">Penyedap rasa</span></li>
      </ul>
      
      <p><span style="color:#ffffff"><strong><span style="font-size:20px"><span style="background-color:#011f6d">Cara pembuatan :</span></span></strong></span></p>
      
      <ol>
        <li style="text-align: justify;"><span style="font-size:16px">Cuci bersih cumi hilangkan tinta dan bersih kan dalamnya lalu sisihkan. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Bahan untuk isian cumi. Iris daun bawang, wortel, tomat, dan kentang iris kotak2 kecil. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Masukan isian kedalam cumi hingga penuh dan sematkan tusukan gigi untuk menutup cumi agar isian tidak keluar. lakukan hingga semua cumi terisi setelah semua terisi, saatnya di goreng hingga matang.</span></li>
      </ol>      
      `,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
    },
    {
      gambar: [
        'https://backend.unwinapreneur.com/uploads/kelompok-4-sambal-cumi.jpg',
      ],
      nama: 'Sambal cumi-cum',
      minimalPembelian: 1,
      harga: 0,
      satuan: '',
      deskripsi: `<p style="text-align:center"><span style="color:#ffffff"><strong><span style="font-size:28px"><span style="background-color:#011f6d">SAMBAL CUMI-CUMI</span></span></strong></span></p>

      <p><span style="color:#ffffff"><strong><span style="font-size:20px"><span style="background-color:#011f6d">Bahan sambal cumi-cumi:</span></span></strong></span></p>
      
      <ul>
        <li><span style="font-size:16px">Baby cumi - 250 gram,</span></li>
        <li><span style="font-size:16px">Cabai rawit - 20 buah,</span></li>
        <li><span style="font-size:16px">Cabai merah - 5 buah</span></li>
        <li><span style="font-size:16px">Bawang merah - 8 butir</span></li>
        <li><span style="font-size:16px">Bawang putih - 3 siung</span></li>
        <li><span style="font-size:16px">Serai - 1 batang</span></li>
        <li><span style="font-size:16px">Daun jeruk - 5 lembar</span></li>
        <li><span style="font-size:16px">Garam - secukupnya</span></li>
        <li><span style="font-size:16px">Gula - secukupnya</span></li>
      </ul>
      
      <p><span style="font-size:20px"><strong><span style="color:#ffffff"><span style="background-color:#011f6d">Cara pembuatan:</span></span></strong></span></p>
      
      <ol>
        <li><span style="font-size:16px">Bersihkan cumi-cumi, buang tulang lunaknya, lalu cuci bersih. </span></li>
        <li><span style="font-size:16px">Goreng sebentar sampai setengah matang. Angkat dan tiriskan. </span></li>
        <li><span style="font-size:16px">Haluskan atau uleg cabai rawit, cabai merah, bawang merah dan bawang putih. </span></li>
        <li><span style="font-size:16px">Tumis bumbu halus yang sudah dihaluskan bersama serai dan daun jeruk dengan minyak agak banyak. Masak hingga harum. </span></li>
        <li><span style="font-size:16px">Masukkan petai dan cumi-cumi, tambahkan garam dan gula sesuai selera. Masak hingga sambal matang.</span></li>
      </ol>
      `,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
    },
    {
      gambar: [
        'https://backend.unwinapreneur.com/uploads/kelompok-4-sosis-mie.jpg',
      ],
      nama: 'Sosis Mie',
      minimalPembelian: 1,
      harga: 0,
      satuan: '',
      deskripsi: `
      <p>&nbsp;</p>
      
      <p style="text-align:center"><span style="color:#ffffff"><strong><span style="font-size:28px"><span style="background-color:#011f6d">SOSIS MIE</span></span></strong></span></p>
      
      <p><span style="color:#ffffff"><span style="font-size:20px"><strong><span style="background-color:#011f6d">Bahan sosis mie:</span></strong></span></span></p>
      
      <ul>
        <li><span style="font-size:16px">Sosis sapi </span></li>
        <li><span style="font-size:16px">Mie kuning keriting&nbsp;</span></li>
        <li><span style="font-size:16px">Air secukupnya (untuk merebus) </span></li>
        <li><span style="font-size:16px">Telur (kocok lepas) </span></li>
        <li><span style="font-size:16px">1 bungkus Kobe Tepung Kentucky SuperCrispy </span></li>
        <li><span style="font-size:16px">Mayones &amp; Boncabe Cara pembuatan sosmi (Sosis Mine) Gulung</span></li>
      </ul>
      
      <p><span style="color:#ffffff"><strong><span style="font-size:20px"><span style="background-color:#011f6d">Cara Pembuatan:</span></span></strong></span></p>
      
      <ol>
        <li><span style="font-size:16px">Potong ujung sosis untuk mengaitkan mie. </span></li>
        <li><span style="font-size:16px">Rebus mie hingga setengah matang. Tiriskan. </span></li>
        <li><span style="font-size:16px">Lilit sosis dengan mie. Sisihkan. </span></li>
        <li><span style="font-size:16px">Campurkan telur dan 1 sendok makan Nasi Goreng Poll Pedas. Aduk rata dan sisihkan. </span></li>
        <li><span style="font-size:16px">Celupkan sosis gulung. Gulirkan ke dalam Kobe Tepung kobe Crispy kering hingga rata. </span></li>
        <li><span style="font-size:16px">Goreng dalam minyak panas hingga matang. Angkat dan tiriskan. </span></li>
        <li><span style="font-size:16px">Siap disajikan dengan cocolan mayonaise dan BonCabe.</span></li>
      </ol>
      `,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
    },
    {
      gambar: [
        'https://backend.unwinapreneur.com/uploads/kelompok-4-manggulu.jpg',
      ],
      nama: 'Manggulu',
      minimalPembelian: 1,
      harga: 0,
      satuan: '',
      deskripsi: `
      <p style="text-align:center"><span style="color:#ffffff"><strong><span style="font-size:28px"><span style="background-color:#011f6d">Manggulu</span></span></strong></span></p>
      
      <p style="text-align:justify"><span style="font-size:16px">Kue Khas Sumba yang Lezat Manggulu&nbsp;&ndash; Indonesia merupakan negara yang sangat besar. Para penduduknya berasal dari berbagai latar belakang kebudayaan dan adat istiadat yang berbeda. Keberagaman budaya yang ada di Indonesia melahirkan keberagaman di bidang kuliner. Ada banyak kuliner khas Indonesia yang mungkin jumlahnya ada ratusan. Salah satunya kuliner yang ada di Nusa Tenggara Timur. Di Nusa Tenggara Timur, tempat ini bukan hanya terkenal akan kayu cendananya. Provinsi yang juga dikenal dengan sebutan NTT ini ternyata menyediakan banyak kuliner khas yang akan membuat siapapun ketagihan ketika mencicipinya.</span></p>
      
      <p style="text-align:justify"><span style="color:#ffffff"><strong><span style="font-size:20px"><span style="background-color:#011f6d">Cara Membuat Manggulu:</span></span></strong></span></p>
      
      <ol>
        <li style="text-align: justify;"><span style="font-size:16px">Untuk membuat Manggulu sebenarnya tidak sulit. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Cara pembuatan maupun penyajiannya pun terbilang sederhana. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Selain itu, bahan dasar dari kue ini mudah didapatkan yaitu kacang tanah dan pisang yang pastinya banyak yang menjualnya. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Namun, untuk proses pembuatannya memang memerlukan waktu yang lebih lama karena semuanya dilakukan secara alami. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Proses pengupasan pisang hingga menjadi Manggulu saja memerlukan waktu kurang lebih 2 minggu. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Kue Manggulu adalah makanan yang dibuat dari pisang kepok. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Pisang tersebut dimasak lalu dikeringkan dengan menjemurnya di bawah sinar matahari. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Kemudian, untuk kacang merah digoreng terlebih dahulu tanpa menggunakan minyak. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Cara menggorengnya dengan cara disangrai dan kemudian kamu buang kulit arinya. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Setelah itu, kacang ditumbuk bersama pisang kepok yang sudah dikeringkan. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Jika keduanya sudah halus, kamu harus mencampur kedua bahan ini dan bisa mulai membuat bentuknya. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Untuk pembuatan tradisional, kamu bisa membuat Manggulu ini dengan menggunkan tangan. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Namun sekarang pencampurannya bisa menggunakan mesin penggiling. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Kue Manggulu yang asli akan dikemas dengan daun pisang kering. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Hal ini berdasarkan tradisi masyarakat Sumba bahwa daun kering merupakan wadah pembungkus yang sekaligus mengawetkan. </span></li>
        <li style="text-align: justify;"><span style="font-size:16px">Adonan kue Manggulu nantinya akan digulung di dalam daun pisang kering sampai berbentuk oval. Selanjutnya, kamu ikat bagian atas dan bawahnya.</span></li>
      </ol>
      `,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
    },
    {
      gambar: [
        'https://backend.unwinapreneur.com/uploads/kelompok-4-sosis-telur.jpg ',
      ],
      nama: 'Sosis Telu',
      minimalPembelian: 1,
      harga: 0,
      satuan: '',
      deskripsi: `
      <p style="text-align:center"><span style="color:#ffffff"><strong><span style="font-size:28px"><span style="background-color:#011f6d">Sosis Telur</span></span></strong></span>:</p>
      
      <p><span style="color:#ffffff"><span style="font-size:20px"><span style="background-color:#011f6d">Bahan:</span></span></span></p>
      
      <ul>
        <li>Sosis</li>
        <li>Telur</li>
        <li>Daun Bawang</li>
        <li>Daun sup</li>
        <li>Tomat</li>
        <li>Royco Ayam</li>
        <li>Sambal Pedas</li>
      </ul>
      
      <p><span style="color:#ffffff"><strong><span style="font-size:20px"><span style="background-color:#011f6d">Alat:</span></span></strong></span></p>
      
      <ul>
        <li><span style="font-size:16px">Piring Kue yang kotak sisinya bergerigi (kertas) </span></li>
        <li><span style="font-size:16px">Plastik </span></li>
        <li><span style="font-size:16px">Garpu kecil </span></li>
        <li><span style="font-size:16px">Plastik sambal (sudah ada)</span></li>
      </ul>
      
      <p><span style="color:#ffffff"><strong><span style="font-size:20px"><span style="background-color:#011f6d">Proses Pembuatan:</span></span></strong></span></p>
      
      <ol>
        <li><span style="font-size:16px">Sosisnya di kupas lalu dibelah bagian tengah sampai bawah, </span></li>
        <li><span style="font-size:16px">Siapkan Lidi untuk menyambungkan sosis yang sudah di belah, </span></li>
        <li><span style="font-size:16px">Telur di dopok (bisa juga siapkan 1 butir),&nbsp;</span></li>
        <li><span style="font-size:16px">Lalu campurkan penyedap rasa agar rasanya lebih lezat, </span></li>
        <li><span style="font-size:16px">&nbsp;Setelah semua bahan sdh tersedia, tuangkan Minyak ke dalam wadah yang sudah di panaskan di atas kompor, </span></li>
        <li><span style="font-size:16px">Bisa langsung masukkan Sosis ke dalam wadah, lalu </span></li>
        <li><span style="font-size:16px">Tuangkan telur yang sdh disiapkan tadi ke ketengah sosis yang di bentuk, </span></li>
        <li><span style="font-size:16px">Ketika telur dan sosisnya sdh matang, angkat dan sajikan ke tempat sajian, </span></li>
        <li><span style="font-size:16px">Setelah selesai akan di tabur hiasan (Daun Sup + Tomat) dan juga pelengkap seperti Sambalnya + garpu</span></li>
      </ol>
      `,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
    },
  ];
  for (const produk of produkData) {
    await Produk.create(produk);
  }
  console.log('successfully running produk kelompok 4 seeds');
};
