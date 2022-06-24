import { NextFunction, Request, Response } from 'express';
import SharedPenilaianLapakRepository from '../../repositories/Shared/penilaianLapak';

const createPenilaianLapak = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await SharedPenilaianLapakRepository.createPenilaianLapak(
      req.body,
      req,
      res,
      next
    );
  } catch (err) {
    next(err);
  }
};

const getPenilaianLapakByLapakAndGuest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await SharedPenilaianLapakRepository.getPenilaianLapakByGuestAndLapakId(
      req.params.guestId,
      req.params.lapakId,
      res,
      next
    );
  } catch (err) {
    next(err);
  }
};
export default { createPenilaianLapak, getPenilaianLapakByLapakAndGuest };
