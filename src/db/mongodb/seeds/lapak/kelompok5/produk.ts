import Produk from '../../../models/product';

export const createProdukKelompok5Seeds = async () => {
  // const hashPass: any = await hashingPassword(payload.password);
  // payload.password = hashPass;
  const lapakId = '62b53fed27ea5275f8cfb3ad';

  const produkData: any[] = [
    {
      gambar: [
        'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      ],
      nama: 'Jasuke',
      minimalPembelian: 1,
      harga: 0,
      satuan: '',
      deskripsi: `<p>Jagung dikonsumsi oleh sebagian masyarakat Indonesia sebagai makanan pokok sehari-hari. Tak hanya nikmat, manfaat jagung bagi kesehatan juga melimpah, mulai dari melancarkan pencernaan, menangkal efek radikal bebas, hingga menjaga kesehatan mata.</p>
      <p>Beragam Manfaat Jagung bagi Kesehatan Di dalam satu buah jagung atau setara dengan 100 gram biji jagung terdapat sekitar 80&ndash;100 kalori. Selain itu, jagung juga mengandung beragam nutrisi, seperti serat, protein, karbohidrat, mineral, dan vitamin. Jagung pun memiliki beragam antioksidan, termasuk asam fenolat, zeaxanthin, antosianin, dan lutein. ada beberapa manfaat jagung yang dapat diperoleh, antara lain:</p>
      <p>1. Melancarkan saluran cerna</p>
      <p>2. Memelihara kesehatan mata</p>
      <p>3. Meningkatkan kepadatan tulang</p>
      <p>4. Mencegah depresi</p>
      <p>5. Mengendalikan tekanan darah</p>`,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
      type: 'barang', // barang | jasa
    },
    {
      gambar: [
        'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      ],
      nama: 'Perkedel Tahu',
      minimalPembelian: 1,
      harga: 0,
      satuan: '',
      deskripsi: `<p>Mengontrol gula darah. Tahu mengandung isoflavon yang berasal dari bahan baku utamanya, yaitu kacang kedelai....</p>
      <p>Meningkatkan kekuatan tulang....</p>
      <p>Memelihara fungsi dan kesehatan otak....</p>
      <p>Menurunkan kadar kolesterol....</p>
      <p>Menghambat pertumbuhan sel kanker.</p>`,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
      type: 'barang', // barang | jasa
    },
    {
      gambar: [
        'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      ],
      nama: 'Tempe Orek',
      minimalPembelian: 1,
      harga: 0,
      satuan: '',
      deskripsi: `<p>Protein nabati pada tempe juga didukung kandungan nutrisi lain, seperti vitamin dan mineral untuk menjaga kesehatan tubuh.</p>
      <p>Berikut adalah beberapa manfaat dan khasiat tempe yang dapat Anda rasakan.</p>
      <p>1. Memebangun dan memperbaiki sel tubuh yang rusak</p>
      <p>2. Menurunkan risiko osteoporosis</p>
      <p>3. Mencegah Anemia</p>
      <p>4. Menangkal reaksi radikal bebas</p>`,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
      type: 'barang', // barang | jasa
    },
    {
      gambar: [
        'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      ],
      nama: 'Popcorn',
      minimalPembelian: 1,
      harga: 0,
      satuan: '',
      deskripsi: `<p>Merupakan alternatif camilan sehat saat sedang diet. Selain membantu menurunkan berat badan, makan popcorn juga mempunyai manfaat lain bagi kesehatan. Kandungan polifenol dalam popcorn juga berpotensi menurunkan risiko penyakit jantung dan kanker (seperti kanker payudara dan kanker prostat).</p>`,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
      type: 'barang', // barang | jasa
    },
  ];
  for (const produk of produkData) {
    await Produk.create(produk);
  }
  console.log('successfully running produk kelompok 5 seeds');
};
