import Produk from '../../../models/product';

export const createProdukKelompok9Seeds = async () => {
  // const hashPass: any = await hashingPassword(payload.password);
  // payload.password = hashPass;
  const lapakId = '62b53fec27ea5275f8cfb3ab';

  const produkData: any[] = [
    {
      gambar: [
        'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      ],
      nama: 'Lawar Rumput Laut',
      minimalPembelian: 1,
      harga: 0,
      satuan: '',
      deskripsi: `<p>Manfaat rumput laut sudah dirasakan oleh masyarakat Asia Timur dan Romawi sejak berabad-abad silam. Tak hanya dikonsumsi sebagai lauk sehari-hari, rumput laut juga dimanfaatkan untuk mempercepat penyembuhan luka, luka bakar, dan ruam kulit. Rumput laut merupakan bagian dari keluarga ganggang multi sel yang mencakup ganggang hijau, ganggang merah, serta ganggang cokelat. Selama berabad-abad, rumput laut menjadi primadona untuk bahan obat-obatan, industri, dan makanan karena kandungan gizinya. Kandungan dan Manfaat Rumput Laut Dalam 100 gram rumput laut mentah, terkandung berbagai nutrisi berikut:</p>
      <p>Air: 82,2 gram</p>
      <p>Karbohidrat: 7,94 gram</p>
      <p>Serat: 0,7 gram</p>
      <p>Kalsium: 129 miligram</p>
      <p>Magnesium: 77 miligram</p>
      <p>Fosfor: 60 miligram</p>
      <p>Kalium: 165 miligram</p>
      <p>Sodium: 384 miligram</p>
      <p>Vitamin C: 15 miligram</p>
      <p>Vitamin A: 95 mikrogram</p>
      <p>Folat: 174 mikrogram Beta</p>
      <p>karoten: 1.140 mikrogram</p>
      <p>&nbsp;</p>
      <p>Selain itu, rumput laut juga kaya akan&nbsp;antioksidan&nbsp;yang baik untuk kesehatan tubuh. Berikut adalah beberapa manfaat rumput laut yang bisa Anda peroleh ketika mengonsumsinya:</p>
      <p>1. Meningkatkan fungsi tiroid Tiroid punya peranan penting dalam sistem metabolisme tubuh. Untuk menjalankan fungsinya,&nbsp; . Meningkatkan fungsi tiroid Tiroid punya peranan penting dalam sistem metabolisme tubuh. Untuk menjalankan fungsinya,&nbsp;kelenjar tiroid&nbsp;butuh asupan yodium yang bisa didapat dengan mengonsumsi rumput laut atau garam beryodium. Kekurangan yodium dapat menyebabkan&nbsp;hipotiroid.</p>
      <p>2. Meningkatkan kesehatan jantung Rumput laut merupakan sumber serat larut air yang baik. Rumput laut juga mengandung asam lemak omega-3 serta antioksidan yang bermanfaat untuk&nbsp;kesehatan jantung. Beberapa penelitian menunjukkan bahwa kandungan gizi dalam rumput laut terlihat mampu menurunkan tekanan darah, mengurangi&nbsp;kolesterol jahat (LDL)&nbsp;dan kolesterol total, serta mencegah pembekuan darah. Namun penelitian klinis lebih lanjut mengenai manfaat rumput laut tersebut masih diperlukan untuk memperkuat bukti tersebut.</p>
      <p>3. Menstabilkan gula darah Penelitian menunjukkan bahwa pola makan tinggi serat, yang bisa didapat dari sayur, buah, dan rumput laut, bisa membantu memperbaiki kadar gula darah. Senyawa&nbsp;fucoxantin&nbsp;dan alginat dalam rumput laut diyakini dapat mengurangi&nbsp;resistensi insulin&nbsp;dan menstabilkan kadar gula darah, serta mencegah diabetes tipe 2.</p>
      <p>4. Membantu menurunkan berat badan Kandungan&nbsp;fucoidan&nbsp;yang terdapat dalam rumput laut diketahui dapat meningkatkan pemecahan lemak serta mencegah pembentukan lemak di dalam tubuh. Selain itu, rumput laut juga mengandung serat yang dapat mengurangi rasa lapar dan membuat tubuh merasa kenyang lebih lama.</p>
      <p>5. Memperkuat sistem kekebalan tubuh Sejumlah penelitian di laboratorium menunjukkan bahwa senyawa antioksidan dan anti-alergenik dalam rumput laut memiliki kemampuan untuk menghalangi berbagai virus masuk ke dalam sel tubuh. Namun, penelitian lebih lanjut diperlukan untuk membuktikan manafaat rumput laut ini pada manusia.</p>
      <p>6. Meningkatkan kesehatan usus Kandungan serat dalam rumput laut dapat membantu mencegah&nbsp;sembelit&nbsp;dan memastikan sistem pencernaan berjalan lancar. Rumput laut juga mengandung prebiotik yang menguntungkan untuk usus dan mengurangi risiko infeksi bakteri tertentu yang berbahaya.</p>
      <p>7. Menurunkan risiko kanker tertentu Beberapa penelitian menunjukkan bahwa mengonsumsi rumput laut secara rutin diduga dapat menurunkan risiko&nbsp;kanker payudara&nbsp;dan&nbsp;kanker tiroid. Namun, penelitian lanjutan masih diperlukan untuk membuktikan manfaat rumput laut&nbsp; ini. Rumput laut juga diketahui memberikan perlindungan untuk melawan beberapa penyakit, seperti&nbsp;sindrom metabolik, kerusakan kulit, hingga&nbsp;penyakit radang sendi. Meski baik untuk kesehatan, sebaiknya jangan terlalu banyak mengonsumsi rumput laut. Batasi asupan rumput laut sebanyak 4 gram per hari Rumput laut kaya akan zat yodium yang jika dikonsumsi berlebihan dapat menyebabkan risiko perdarahan, gangguan tiroid, dan masalah ginjal. Selain itu, rumput laut juga mengandung zat logam, seperti&nbsp;merkuri, timbal, dan cadmium, yang berbahaya bagi tubuh.</p>`,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
      type: 'barang', // barang | jasa
    },
    {
      gambar: [
        'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      ],
      nama: 'Kacang goreng Bawang',
      minimalPembelian: 1,
      harga: 0,
      satuan: '',
      deskripsi: `<p>Manfaat Kacang tanah, Berdasarkan data Kemenkes RI (TKPI), setiap 100 gram &quot;Kacang tanah, goreng&quot; mengandung 4,1 mg besi, 106 mg kalsium, 0,40 mg tiamina, 2,8 gram serat dan 390 mg fosfor. Ini menunjukkan bahwa kandungan besi, kalsium, tiamina, serat dan fosfor termasuk tinggi dan cukup tinggi.</p>
      <p>Mengkonsumsi &quot;Kacang tanah, goreng&quot; secara teratur sesuai AKG (Angka Kecukupan Gizi) atau sesuai kebutuhan gizi per hari dari Kemenkes RI, bermanfaat untuk kesehatan Kacang tanah sangat tinggi akan kandungan protein, zat besi, vitamin E, kalsium, fosforus, vitamin B kompleks, A dan K, kolin, kalsium dan lesitin. Protein yang terdapat di dalam kacang tanah ini bahkan lebih tinggi dari daging, telur dan juga kacang kedelai sehingga sebenarnya kacang tanah sangat baik dikonsumsi baik anak anak sampai orang dewasa. Selain bisa diolah menjadi bumbu makanan, selai dan juga kue, kacang tanah juga sudah sangat nikmat dikonsumsi dengan cara direbus atau goreng. Untuk kesempatan kali ini, kami akan membahas tentang beberapa manfaat kacang tanah goreng yang harus diketahui dan sebaiknya lebih banyak dikonsumsi, Seperti.</p>
      <p>1. Meningkatkan Kesuburan Kacang tanah baik manfaat kacang tanah rebus atau goreng mengandung folat yang sangat tinggi sehingga sangat baik dikonsumsi untuk meningkatkan kesuburan. Dalam studi menunjukkan jika seorang wanita yang mengkonsumsi 400 mikogram asam folat sebelum dan selama awal kehamilan seperti kandungan dalam kacang tanah, maka bisa menurunkan risiko bayi lahir cacat tabung saraf serius hingga mencapai 70%.</p>
      <p>2. Mengatasi Depresi Dalam kacang tanah memiliki kandungan tryptophan yakni jenis asam amino esensial yang sangat penting dalam memproduksi serotonin bahan kimia otak utama yang berkaitan dengan regulasi suasana hati baik manfaat kacang tanah sangrai atau goreng.</p>
      <p>3. Sumber Tenaga Kacang tanah merupakan makanan sumber energi alami bagi manusia. Dengan mengkonsumsi kacang tanah secara teratur, maka stamina fisik ketika beraktivitas bisa dipertahankan termasuk juga untuk stamina dalam berhubungan.</p>
      <p>4. Meningkatkan Daya Ingat Vitamin B3 dalam kacang tanah sangat penting untuk meningkatkan daya ingat. Kandungan vitamin B3 atau niacin dalam kacang tanah ini bisa meningkatkan fungsi otak normal sekaligus juga meningkatkan daya ingat.</p>
      <p>5. Mengatur Tingkat Kolesterol Kolesterol memiliki peran penting untuk menentukan kesehatan sistem kardiovaskular yang terbagi menjadi 2 jenis yakni kolesterol jahat dan baik. Manfaat kolesterol baik memang dibutuhkan untuk sistem kardiovaskular namun tidak dengan kolesterol jahat. Mengkonsumsi kacang tanah goreng dengan teratur bisa menurunkan kadar kolesterol tinggi namun sekaligus juga meningkatkan kolesterol baik dalam darah ditambah lagi dengan asam oleat dalam kacang tanah yang juga penting untuk mengatur kadar kolesterol.</p>
      <p>6. Menjaga Kesehatan Jantung Jantung merupakan organ vital tubuh dan tidak pernah beristirahat sehingga sangat penting untuk merawat kesehatan jantung agar bisa terus bekerja memompa darah ke seluruh tubuh. Asam lemak tah jenuh tunggal seperti asam oleat yang ada dalam manfaat kacang tanah untuk jantung ini bisa mengatur kadar kolesterol darah dengan cara meningkatkan kolesterol baik dan menurunkan kolesterol jahat sehingga berbagai masalah jantung seperti serangan jantung, stroke jantung, penyumbatan pembuluh darah, pengerasan arteri dan juga aterosklerosis bisa dicegah.</p>
      <p>7. Menurunkan Risiko Diabetes Mengkonsumsi kacang tanah dalam jumlah yang cukup bisa menurunkan risiko diabetes karena kandungan mangan dalam kacang tanah. Mangan ini memegang peran penting dalam metabolisme lemak dan karbohidrat, penyerapan kalsium dan juga regulasi gula darah. Selain itu, kacang tanah juga tinggi akan serat untuk mengurangi risiko diabetes.</p>`,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
      type: 'barang', // barang | jasa
    },
    {
      gambar: [
        'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      ],
      nama: 'Lumpia',
      minimalPembelian: 1,
      harga: 0,
      satuan: '',
      deskripsi: `<p>10 Manfaat dan Khasiat Lumpia untuk Kesehatan</p>
      <p>Kelua Tabalong. Lumpia merupakan salah satu makanan khas kota Semarang. Tentu, anda sudah tidak asing dengan makanan yang satu ini. Makanan ini biasanya menjadi cemilan saat bersantai dirumah. Jika digoreng warnanya kecoklatan, bentuknya memanjang serta di dalamnya terdapat irisan wortel dan sayuran lainnya. Makanan yang menjadi kegemaran masyarakat Semarang ini terbagi menjadi dua jenis, ada yang basah dan juga kering. Namun, baik lumpia basah atau pun kering sama-sama mempunyai manfaat bagi kesehatan. Dalam makanan ini mengandung energi, protein, karbohidrat, lemak, kalsium, fosfor, dan zat besi.</p>
      <p>Selain itu kandungan vitamin A, B1 dan C juga terdapat dalam makanan ini. Kandungan-kandungan tersebut sangatlah dibutuhkan untuk menjaga agar tubuh tetap sehat. Makanan ini juga sangat populer sehingga banyak diminati oleh wisatawan saat berkunjung ke daerah Jawa Tengah. Jika anda ingin menikmati makanan ini maka anda tidak perlu jauh-jauh berkunjung ke Semarang karena saat ini anda bisa menjumpai makanan ini dipasar atau pedagang kaki lima. Untuk anda yang ingin mengetahui apa saja manfaat dan khasiat lumpia ini, berikut inilah manfaatnya.</p>
      <p>1. Menjaga kesehatan sel-sel dalam tubuh Khasiat lumpia yang pertama dapat menjaga kesehatan sel-sel dalam tubuh. Kandungan protein yang ada di dalamnya dapat bermanfaat untuk menjaga dan melindungi sel-sel yang terdapat di dalam tubuh sehingga semua sel bisa berfungsi dengan baik. Oleh karena itu, konsumsilah makanan ini.</p>
      <p>2. Mengurangi resiko stroke Stroke merupakan penyakit kronis yang ditandai dengan rusaknya sebagian dari otak. Untuk mengurangi resiko stroke anda bisa mengkonsumsi lumpia ini. Kandungan protein dan vitamin C yang ada dalamnya dapat mencegah resiko stroke.</p>
      <p>3. Mengurangi resiko kanker Kanker menjadi salah satu penyebab kematian terbesar sampai saat ini. Untuk mengurangi resiko kanker anda bisa mengkonsumsi lumpia. Kandungan vitamin C yang ada di dalamnya terbukti mampu melawan sel kanker dalam tubuh sehingga anda bisa terbebas dari resiko kanker.</p>
      <p>4. Menurunkan kadar kolesterol jahat Jika anda salah satu penderita kolesterol maka sebaiknya anda mengkonsumsi makanan ini. Kandungan antioksidan yang ada di dalamnya dapat menurunkan kadar koleterol sehingga makanan ini baik dikonsumsi bagi penderita kolesterol.</p>
      <p>5. Melancarkan sistem pencernaan Sistem pencernaan yang tidak lancar akan menyebabkan terjadinya penyakit sembelit. Oleh karena itu, anda bisa mengkonsumsi lumpia. Kandungan karbohidrat yang terdapat pada makanan ini sangat efektif melancarkan sistem pencernaan sehingga bisa mencegah resiko sembelit.</p>
      <p>6. Meningkatkan fungsi otak Kandungan B1 yang terdapat dalam makanan ini juga sangat bermanfaat untuk meningkatkan fungsi otak. Dengan mengkonsumsi makanan ini maka akan membantu anda agar otak dapat berfungsi dengan baik.</p>
      <p>7. Menjaga kesehatan mata Untuk menjaga kesehatan mata anda bisa mengkonsumsi makanan ini. Kandungan vitamin A dan C yang ada di dalamnya mampu meningkatkan kesehatan mata sehingga bisa mencegah dari resiko penyakit mata. Oleh karena itu mulailah mengkonsumsi makanan ini.</p>
      <p>8. Menguatkan tulang Semakin bertambahnya usia seseorang maka kekuatan tulang juga akan semakin menurun. Untuk menjaga agar tulang tetap kuat maka anda bisa mengkonsumsi lumpia ini. Kandungan kalsium yang ada di dalamnya berguna untuk menguatkan tulang sehingga tulang tidak mudah patah.</p>
      <p>9. Menghasilkan energi Selain bermanfaat untuk menguatkan tulang, lupia juga dapat menghasilkan energi bagi tubuh. Kandungan vitamin B1 yang ada dalam makanan ini mampu menghasilkan energi yang dibutuhkan oleh tubuh sehingga tubuh tidak mudah lelah karena kekurangan energi.</p>
      <p>10. Mencegah anemia Anemia atau kekurangan darah dapat dicegah dengan mengkonsumsi makanan ini. Kandungan zat besi yang terdapat dalam makanan ini sangat baik untuk meningkatkan produksi sel darah merah sehingga bisa mencegah anda dari resiko anemia atau kekurangan darah.</p>`,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
      type: 'barang', // barang | jasa
    },
    {
      gambar: [
        'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      ],
      nama: 'Kue Nogosari',
      minimalPembelian: 1,
      harga: 0,
      satuan: '',
      deskripsi: `<p>Lapek ini terbuat dari tepung beras yang menggunakan pisang sebagai isian dalamnya.&nbsp;Buah pisang&nbsp;juga merupakan salah satu buah yang biasa dikonsumsi oleh masyarakat. Pisang yang biasa dikonsumsi oleh orang Indonesia merupakan pisang tanduk, pisang ambon dan pisang tongka langit. Pisang juga buah yang memiliki kandungan karbohidrat, mineral, vitamin B6 dan vitamin C yang tinggi. Nah, selain memiliki rasa manis dan menjadi kesukaan pisang memiliki banyak manfaat antara lain :</p>
      <p>Bermanfaat untuk penderita hipertensi. Kandungan kalium yang ada pada pisang bisa bermanfaat untuk sebagai antihipertensi sehingga membantu&nbsp;penurunan tekanan darah. Selain itu, pisang juga mempunyai aktivitas sebagai&nbsp;Angiotensi Converting Enzyme (Ace- Inhibitor) dalam tubuh manusia sehingga mampu menghambat terbentuknya angiotensin dan bisa menurunkan tekanan darah.</p>
      <p>Cocok untuk mengurangi&nbsp;stress. Kandungan kalium pada pisang juga bisa membantu untuk kamu yang lagi&nbsp;stress,&nbsp;nih!</p>
      <p>Bermanfaat untuk mengembalikan energi saat kelelahan. Kandungan karbohidrat dan mineral yang terkandung pada pisang bermanfaat untuk olahraga dengan durasi yang panjang.</p>
      <p>Cocok bagi yang sendang melakukan diet. Kamu yang sedang melakukan diet, konsumsi pisang cocok nih, buat kamu. Kandungan serat yang tinggi pada pisang bisa membuat kamu kenyang lebih lama.</p>
      <p>Resep membuat Lapek Nagosari (8 Porsi)</p>
      <p>&nbsp;</p>
      <p>Cara membuat :</p>
      <p>Daun pisang dibersihkan dan dipotong sesuai ukuran yang diinginkan</p>
      <p>Potong pisang menjadi 2 bagian</p>
      <p>Campur santan, garam, gula dan daun pandan. Aduk-aduk dan tunggu hingga setengah mendidih</p>
      <p>Lalu, masukkan ke dalam campuran tadi ke&nbsp;tepung beras. Aduk-aduk hingga rata sehingga tidak ada yang menggumpal</p>
      <p>Panaskan wajan, masak adonan hingga matang dan mengental. Jika terlihat mengental tambahkan sedikit air. Lalu cek rasa.</p>
      <p>Siapkan daun, ambil 1 sdm adonan dan letakkan potongan pisang ke bagian tengah adonan. Tutup dengan adonan lagi hingga tertutup merata. Bungkus daun pisang dengan rapat.</p>
      <p>Setelah itu, masukkan ke dalam risopan. Kukus kue selama 30 menit hingga matang. Lalu angkat dan sajikan.</p>
      <p>Nilai Gizi Lapek</p>
      <p>Nagosari Bedasarkan Tabel Komposisi Pangan Indonesia (TKPI) Tahun 2017, kandungan gizi lapek nagosari 1 buah (70 gr) memiliki kalori 270 kalori, 3,65 gram protein, 5,3 gram lemak dan 52,5 gram karbohidrat</p>`,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
      type: 'barang', // barang | jasa
    },
  ];
  for (const produk of produkData) {
    await Produk.create(produk);
  }
  console.log('successfully running produk kelompok 9 seeds');
};
