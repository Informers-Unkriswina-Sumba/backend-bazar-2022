import { JWT_EXPIRES_IN, JWT_SECRET } from '../config/jwt';
import jwt from 'jsonwebtoken';

export const createJWTToken = (user: { id: string; email: string }) =>
  jwt.sign(
    {
      pelapakId: user.id,
      email: user.email,
    },
    JWT_SECRET,
    {
      expiresIn: JWT_EXPIRES_IN, // token expires 2 hour
    }
  );
