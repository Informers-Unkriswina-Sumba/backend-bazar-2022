import { NextFunction, Request, Response } from 'express';
import SharedPenilaianAnggotaRepository from '../../repositories/Shared/penilaianAnggota';

const createPenilaianAnggota = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await SharedPenilaianAnggotaRepository.createPenilaianAnggota(
      req.body,
      req,
      res,
      next
    );
  } catch (err) {
    next(err);
  }
};

const getPenilaianAnggotaByNimAndGuest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await SharedPenilaianAnggotaRepository.getPenilaianAnggotaByGuestAndNim(
      req.params.guestId,
      req.params.nim,
      res,
      next
    );
  } catch (err) {
    next(err);
  }
};

const getListPenilaian = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await SharedPenilaianAnggotaRepository.getListPenilaian(res, next);
  } catch (err) {
    next(err);
  }
};
export default {
  createPenilaianAnggota,
  getPenilaianAnggotaByNimAndGuest,
  getListPenilaian,
};
