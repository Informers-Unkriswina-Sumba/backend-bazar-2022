import Pelapak from '../models/pelapak';

export const createPelapakSeeds = async () => {
  // const hashPass: any = await hashingPassword(payload.password);
  // payload.password = hashPass;

  const pelapakData = [
    // KELOMPOK 1
    // {
    //   nama: 'Aner Rada Ndima',
    //   lapak: '62b53fed27ea5275f8cfb3b9',
    //   email: 'anerndima19@gmail.com',
    //   noTelfon: '',
    //   password: '$2a$11$7W9WAb7RfimsNIwA508yRu8Uy9T4Vahnt3qb6JBKgTNbuKmFBHPZS', // KWsBo4
    //   createdAt: new Date(),
    // },
    // KELOMPOK 2
    // {
    //   nama: 'Faldi Eduard Tetelepta',
    //   lapak: '62b53fed27ea5275f8cfb3af',
    //   email: 'falditetelepta22@gmail.com',
    //   noTelfon: '',
    //   password: '$2a$11$fbl589xnxl2HIPDgyivOjuyZAxMZYVql5tYNyjcmvflrrFeH/rMhO', // zkMotq
    //   createdAt: new Date(),
    // },
    // KELOMPOK 3
    // {
    //   nama: 'antoniuslidjang12@gmail.com',
    //   lapak: '62b53fed27ea5275f8cfb3b5',
    //   email: 'antoniuslidjang12@gmail.com',
    //   noTelfon: '',
    //   password: '$2a$11$xPios/ZLYNK4vqwLSlVQAudJy.HzsBQVgjDbdNYdBs/sXyLaecUsW', // atyUXK
    //   createdAt: new Date(),
    // },
    // KELOMPOK 4
    // {
    //   nama: 'Rinto Tunggu Djama',
    //   lapak: '62b53fed27ea5275f8cfb3b7',
    //   email: 'ryntodjawa11@gmail.com',
    //   noTelfon: '',
    //   password: '$2a$11$o/i0aISTp3LZGWVwOPHb4OKCPncr5PnHMkV1ey/SHPHw4pVTZcF.i', // ctdNzM
    //   createdAt: new Date(),
    // },
    // KELOMPOK 5
    // {
    //   nama: 'Kasimirus Richard Latunussa',
    //   lapak: '62b53fed27ea5275f8cfb3ad',
    //   email: 'richardlatunussa@gmail.com',
    //   noTelfon: '',
    //   password: '$2a$11$cMiCu9VaUfrWtaqrULqH6eDOhukxIfxHyGBes6XkkRxZ9vkL3q9jy', // yoB5gR
    //   createdAt: new Date(),
    // },
    // KELOMPOK 6
    // {
    //   nama: 'VICTOR IAMNUEL MESA MILLA',
    //   lapak: '62b53fed27ea5275f8cfb3b3',
    //   email: 'victorimanuelmesamilla@gmail.com',
    //   noTelfon: '',
    //   password: '$2a$11$NNVgGH1pu3FRk2dlXqvIg..4zqrjyHNM/4NMzNzer9tN9mp1cB7Fu', // vaPWCe
    //   createdAt: new Date(),
    // },
    // KELOMPOK 7
    // {
    //   nama: 'Leonard Rihi',
    //   lapak: '62b53fed27ea5275f8cfb3b1',
    //   email: 'leonard.rihi03@gmail.com',
    //   noTelfon: '',
    //   password: '$2a$11$74MRvjWju94R6FNOUPW1p.YIqUSeuCCjILZIZDoxKBFg1yxZKEEi2', // kMQImV
    //   createdAt: new Date(),
    // },
    // KELOMPOK 8
    // {
    //   nama: 'Nuryanti kareri hara',
    //   lapak: '62b53fec27ea5275f8cfb3a9',
    //   email: 'nuryantikarerihara@gmail.com',
    //   noTelfon: '',
    //   password: '$2a$11$or0/906kSkHvSns2ivDcleZLiVKtWnNN0IMuUEQtiEqLx0.IoH6Nu', // 4wRKXS
    //   createdAt: new Date(),
    // },
    // KELOMPOK 9
    // {
    //   nama: 'Joshua Roberts Tamu Umbu',
    //   lapak: '62b53fec27ea5275f8cfb3ab',
    //   email: 'joshtamuumbu@gmail.com',
    //   noTelfon: '',
    //   password: '$2a$11$D3uEw6X0OPHjEu9itqVwzOcuYHJCn591epZEFCKR6GaRMH1qhFZ1a', // WFnjEZ
    //   createdAt: new Date(),
    // },
    // KELOMPOK 10
    // {
    //   nama: 'Ady Mutu',
    //   lapak: '62b53fea27ea5275f8cfb3a6',
    //   email: 'umbuadymutu@gmail.com',
    //   noTelfon: '085238995760',
    //   password: '$2a$11$gQJEFeY./fwbxdq1TH8hLulT7M.O8eBrxbNrPu18RhlZRU5iLv4Ky', // 0m89rd
    //   createdAt: new Date(),
    // },
  ];
  for (const lapak of pelapakData) {
    await Pelapak.create(lapak);
  }
  console.log('successfully running palapak seeds');
};
