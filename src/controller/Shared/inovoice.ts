import { NextFunction, Request, Response } from 'express';
import SharedInvoiceRepository from '../../repositories/Shared/inovoice';

const printInvoice = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await SharedInvoiceRepository.printInvoice(
      req.params.invoiceId,
      req,
      res,
      next
    );
  } catch (err) {
    next(err);
  }
};

export default { printInvoice };
