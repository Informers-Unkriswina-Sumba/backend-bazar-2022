import Produk from '../../../models/product';

export const createProdukKelompok1Seeds = async () => {
  // const hashPass: any = await hashingPassword(payload.password);
  // payload.password = hashPass;
  const lapakId = '62b3df101e45b10f3d433c93';

  const produkData: any[] = [];
  for (const produk of produkData) {
    await Produk.create(produk);
  }
  console.log('successfully running produk kelompok 1 seeds');
};
