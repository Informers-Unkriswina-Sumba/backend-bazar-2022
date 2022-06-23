import { NextFunction, Request, Response } from 'express';
import GuestInvoiceRepository from '../../repositories/Guest/invoice';

const generateInvoice = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await GuestInvoiceRepository.generateInvoice(req.body, res, next);
  } catch (err) {
    next(err);
  }
};

export default { generateInvoice };
