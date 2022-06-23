import { NextFunction, Request, Response } from 'express';
import ProductSharedRepository from '../../repositories/Shared/product';

const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await ProductSharedRepository.getProductById(
      req.params.productId,
      req,
      res,
      next
    );
  } catch (err) {
    next(err);
  }
};

const getProductByLapak = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await ProductSharedRepository.getProductByLapak(
      req.params.lapakId,
      req,
      res,
      next
    );
  } catch (err) {
    next(err);
  }
};

export default { getProductById, getProductByLapak };
