import AdminModel from '../../models/AdminModel';

export const createAdminSeeds = async () => {
  const admin = {
    firstname: 'Rendy',
    email: 'r3ndydinar@gmail.com',
    lastname: 'Dendimara',
    password: 'R3ndypass',
    username: 'r3ndy',
    isAdmin: true,
    isDeleted: false,
    contactNumber: '082217971133',
    gender: 'P',
  };

  const result = await AdminModel.create(admin);
  console.log('successfully create admin');
  console.log(result);
};
