import Produk from '../../../models/product';

export const createProdukKelompok1Seeds = async () => {
  // const hashPass: any = await hashingPassword(payload.password);
  // payload.password = hashPass;
  const lapakId = '62b53fed27ea5275f8cfb3b9';

  const produkData: any[] = [
    {
      gambar: ['https://backend.unwinapreneur.com/uploads/kelompok-1.jpg'],
      nama: 'Lumpia',
      minimalPembelian: 0,
      harga: 0,
      satuan: '',
      deskripsi: ``,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
      type: 'barang', // barang | jasa
    },
    {
      gambar: ['https://backend.unwinapreneur.com/uploads/kelompok-1.jpg'],
      nama: 'Es kelapa',
      minimalPembelian: 0,
      harga: 0,
      satuan: '',
      deskripsi: ``,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
      type: 'barang', // barang | jasa
    },
    {
      gambar: ['https://backend.unwinapreneur.com/uploads/kelompok-1.jpg'],
      nama: 'Kopi',
      minimalPembelian: 0,
      harga: 0,
      satuan: '',
      deskripsi: ``,
      lapak: lapakId,
      isSuspended: false,
      createdAt: new Date(),
      type: 'barang', // barang | jasa
    },
  ];
  for (const produk of produkData) {
    await Produk.create(produk);
  }
  console.log('successfully running produk kelompok 1 seeds');
};
