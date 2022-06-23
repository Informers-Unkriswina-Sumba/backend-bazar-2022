import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { JWT_SECRET } from '../config/jwt';
import Pelapak from '../db/mongodb/models/pelapak';

// handle verify token
export const isPelapakAuth = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers['pelapak-token'] || req.headers.authorization;
  if (!token) {
    return res.status(401).send({
      success: false,
      data: null,
      message: 'A token is required for authentication',
    });
  }
  try {
    const pelapak = await Pelapak.findOne({ token: token });
    if (!pelapak) {
      return res.status(401).send({
        success: false,
        data: null,
        message: 'Pelapak no login',
      });
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    if (err.message === 'jwt expired') {
      return res.status(401).send({
        success: false,
        data: null,
        message: 'Token is expired',
      });
    }
    return res.status(401).send({
      success: false,
      data: null,
      message: err.message,
    });
  }
  return next();
};
