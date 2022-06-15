import jwt from 'jsonwebtoken';
// const createToken = (user: { id: string; email: string; is_admin: boolean }) =>
export const createTempToken = () =>
  jwt.sign(
    {
      user_id: '61bda332e8b6eb82786af6aa',
      email: 'r3ndydinar@gmail.com',
      is_admin: true,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN, // token expires 336 hour
    }
  );
