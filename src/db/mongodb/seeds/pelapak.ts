import Pelapak from '../models/pelapak';

export const createPelapakSeeds = async () => {
  // const hashPass: any = await hashingPassword(payload.password);
  // payload.password = hashPass;

  const pelapakData = [
    {
      nama: 'Rendy',
      // lapak: '',
      email: 'r3ndydinar@gmail.com',
      password: '$2a$11$1a6rNp9xQd9VEM7L44f.3e12f0AyCMvB51ILPMsM5EhK2/mgH5gta',
      createdAt: new Date(),
    },
  ];
  for (const lapak of pelapakData) {
    await Pelapak.create(lapak);
  }
  console.log('successfully running palapak seeds');
};
