import { NextFunction, Request, Response } from 'express';
import SummaryRepository from '../../repositories/Summary/summary';
// getTotalData
// getBestPerformanceLapak

const getTotalData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await SummaryRepository.getTotalData(res, next);
  } catch (err) {
    next(err);
  }
};

const getBestPerformanceLapak = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await SummaryRepository.getBestPerformanceLapak(res, next);
  } catch (err) {
    next(err);
  }
};

const getBestPerformanceMahasiswa = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await SummaryRepository.getBestPerformanceMahasiswa(res, next);
  } catch (err) {
    next(err);
  }
};

export default {
  getTotalData,
  getBestPerformanceLapak,
  getBestPerformanceMahasiswa,
};
