import { NextFunction, Request, Response } from 'express';
import LapakSharedRepository from '../../repositories/Shared/lapak';

const getLapakBySlugName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await LapakSharedRepository.getLapakBySlugName(
      req.params.slugName,
      req,
      res,
      next
    );
  } catch (err) {
    next(err);
  }
};

const getListLapak = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await LapakSharedRepository.getListLapak(res, next);
  } catch (err) {
    next(err);
  }
};

const getLapakById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await LapakSharedRepository.getLapakById(
      req.params.lapakId,
      req,
      res,
      next
    );
  } catch (err) {
    next(err);
  }
};

export default { getLapakBySlugName, getListLapak, getLapakById };
