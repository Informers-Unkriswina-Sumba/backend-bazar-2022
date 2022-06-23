import Lapak from '../models/lapak';

export const createLapakSeeds = async () => {
  // const hashPass: any = await hashingPassword(payload.password);
  // payload.password = hashPass;

  const pelapakData = [
    {
      namaKelompok: 'Kelompok 4',
      namaLapak: 'InThAg Techno',
      slugName: 'inthag_techno',
      penanggungJawab: 'NOBERTO DJAMI NULI',
      deskripsi:
        'Ada dua jenis kegiatan di lapak, pertama Jualan produk. Kedua ada edukasi (ada ruang dalam lapak yang istrinya beberapa laptop dan HP)',
      logo: 'logo.pn',
      isSuspended: false,
      createdAt: new Date(),
    },
  ];
  for (const lapak of pelapakData) {
    await Lapak.create(lapak);
  }
  console.log('successfully running lapak seeds');
};
