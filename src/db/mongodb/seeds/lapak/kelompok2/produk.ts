import Produk from '../../../models/product';

export const createProdukKelompok2Seeds = async () => {
  // const hashPass: any = await hashingPassword(payload.password);
  // payload.password = hashPass;
  const lapakId = '62b3df101e45b10f3d433c93';
  const produkData: any[] = [
    {
      gambar: ['produk.img'],
      nama: 'Manggulu',
      minimalPembelian: 1,
      harga: 5000,
      satuan: 'mika',
      deskripsi: `<p>&nbsp;</p>
      <p>Manggulu&nbsp;</p>      
      <p>Manggulu &nbsp;merupakan negara yang sangat besar. Para penduduknya berasal dari berbagai latar belakang kebudayaan dan adat istiadat yang berbeda. Keberagaman budaya yang ada di Indonesia melahirkan keberagaman di bidang kuliner. Ada banyak kuliner khas Indonesia yang mungkin jumlahnya ada ratusan. Salah satunya kuliner yang ada di Nusa Tenggara Timur. Di Nusa Tenggara Timur, tempat ini bukan hanya terkenal akan kayu cendananya. Provinsi yang juga dikenal dengan sebutan NTT ini ternyata menyediakan banyak kuliner khas yang akan membuat siapapun ketagihan ketika mencicipinya. Cara Membuat Manggulu Untuk membuat Manggulu sebenarnya tidak sulit. Cara pembuatan maupun penyajiannya pun terbilang sederhana. Selain itu, bahan dasar dari kue ini mudah didapatkan yaitu kacang tanah dan pisang yang pastinya banyak yang menjualnya. Namun, untuk proses pembuatannya memang memerlukan waktu yang lebih lama karena semuanya dilakukan secara alami. Proses pengupasan pisang hingga menjadi Manggulu saja memerlukan waktu kurang lebih 2 minggu. Kue Manggulu adalah makanan yang dibuat dari pisang kepok. Pisang tersebut dimasak lalu dikeringkan dengan menjemurnya di bawah sinar matahari. Kemudian, untuk kacang merah digoreng terlebih dahulu tanpa menggunakan minyak. Cara menggorengnya dengan cara disangrai dan kemudian kamu buang kulit arinya. Setelah itu, kacang ditumbuk bersama pisang kepok yang sudah dikeringkan. Jika keduanya sudah halus, kamu harus mencampur kedua bahan ini dan bisa mulai membuat bentuknya. Untuk pembuatan tradisional, kamu bisa membuat Manggulu ini dengan menggunkan tangan. Namun sekarang pencampurannya bisa menggunakan mesin penggiling. Kue Manggulu yang asli akan dikemas dengan daun pisang kering. Hal ini berdasarkan tradisi masyarakat Sumba bahwa daun kering merupakan wadah pembungkus yang sekaligus mengawetkan. Adonan kue Manggulu nantinya akan digulung di dalam daun pisang kering sampai berbentuk oval. Selanjutnya, kamu ikat bagian atas dan bawahnya.</p>
      `,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
    },
  ];
  for (const produk of produkData) {
    await Produk.create(produk);
  }
  console.log('successfully running produk kelompok 2 seeds');
};
