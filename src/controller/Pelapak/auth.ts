import { NextFunction, Request, Response } from 'express';
import PelapakAuthRepository from '../../repositories/Pelapak/auth';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await PelapakAuthRepository.login(req.body, res, next);
  } catch (err) {
    next(err);
  }
};

const checkLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await PelapakAuthRepository.checkLogin(req.body.token, res, next);
  } catch (err) {
    next(err);
  }
};

const logout = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    await PelapakAuthRepository.logout(req.user.pelapakId, res, next);
  } catch (err) {
    next(err);
  }
};

export default { login, checkLogin, logout };
