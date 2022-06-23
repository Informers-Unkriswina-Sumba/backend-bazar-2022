import { NextFunction, Request, Response } from 'express';
import PelapakInvoiceRepository from '../../repositories/Pelapak/inovoice';

const getList = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    await PelapakInvoiceRepository.getInvoiceByLapakId(
      req.params.lapakId,
      res,
      next
    );
  } catch (err) {
    next(err);
  }
};

const updateStatusInvoice = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { inovoiceId, status } = req.body;
    await PelapakInvoiceRepository.updateStatusInvoice(
      inovoiceId,
      status,
      res,
      next
    );
  } catch (err) {
    next(err);
  }
};

export default { getList, updateStatusInvoice };
