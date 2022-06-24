import Produk from '../../../models/product';

export const createProdukKelompok3Seeds = async () => {
  // const hashPass: any = await hashingPassword(payload.password);
  // payload.password = hashPass;
  const lapakId = '62b53fed27ea5275f8cfb3b5';

  const produkData: any[] = [
    // {
    //   gambar: [
    //     'https://images.unsplash.com/photo-1654779973435-0fae35b3d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    //   ],
    //   nama: '',
    //   minimalPembelian: 0,
    //   harga: 0,
    //   satuan: '',
    //   deskripsi: '',
    //   lapak: lapakId,
    //   isSuspended: false,
    //   createdAt: new Date(),
    // },
  ];
  for (const produk of produkData) {
    await Produk.create(produk);
  }
  console.log('successfully running produk kelompok 3 seeds');
};
