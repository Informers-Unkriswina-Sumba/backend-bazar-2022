import { NextFunction, Response } from 'express';
import Pelapak from '../../db/mongodb/models/pelapak';
import { createJWTToken } from '../../helpers/jwt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../config/jwt';

export const login = async (
  payload: {
    email: string;
    password: string;
  },
  res: Response,
  next: NextFunction
) => {
  try {
    // Validate if user exist in our database
    const palapak = await Pelapak.findOne({ email: payload.email });
    if (!palapak) {
      return res.status(400).send({
        success: false,
        data: null,
        message: 'Email atau password salah',
      });
    }
    const validate: boolean = await palapak.isValidPassword(payload.password);

    if (!validate) {
      return res.status(400).send({
        success: false,
        data: null,
        message: 'Email atau password salah',
      });
    }

    const token = createJWTToken({
      id: String(palapak._id),
      email: palapak.email,
    });

    palapak.token = token;
    palapak.save(); // save after add palapak token, running on

    return res.send({
      success: true,
      data: palapak,
      message: 'Success login',
    });
  } catch (e) {
    next(e);
  }
};

export const checkLogin = async (
  token: string,
  res: Response,
  next: NextFunction
) => {
  const pelapak = await Pelapak.findOne({ token: token });

  if (!pelapak) {
    return res.status(400).send({
      success: false,
      data: null,
      message: 'Token is invalid',
    });
  }
  try {
    jwt.verify(token, JWT_SECRET);
    return res.status(200).send({
      success: true,
      data: pelapak,
      message: 'Login success',
    });
  } catch (err) {
    if (err.message === 'jwt expired') {
      return res.status(400).send({
        success: false,
        data: null,
        message: 'Token is expired',
      });
    }
    next(err);
  }
};

export const logout = async (
  pelapakId: string,
  res: Response,
  next: NextFunction
) => {
  // check if user already exist
  const pelapak = await Pelapak.findById(pelapakId);
  if (pelapak) {
    pelapak.token = '';
    pelapak.save();
    return res.send({
      success: true,
      data: null,
      message: 'Success logout',
    });
  } else {
    return res.status(400).send({
      success: true,
      data: null,
      message: 'Error logout',
    });
  }
};

export default { login, checkLogin, logout };
