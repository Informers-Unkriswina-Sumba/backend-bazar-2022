import { NextFunction, Request, Response } from 'express';
import Invoice from '../../db/mongodb/models/invoice';

const getInvoiceByLapakId = async (
  lapakId: string,
  res: Response,
  next: NextFunction
) => {
  try {
    const invoices = await Invoice.find({ lapak: lapakId });

    return res.send({
      success: true,
      data: invoices,
      message: 'Success get invoice',
    });
  } catch (err) {
    console.log('err', err);
    next(err);
  }
};

const updateStatusInvoice = async (
  invoiceId: string,
  status: string,
  res: Response,
  next: NextFunction
) => {
  try {
    const invoice = await Invoice.findById(invoiceId);
    if (!invoice) {
      return res.status(400).send({
        success: false,
        data: null,
        message: 'Invoice not found',
      });
    }

    const updateInvoice = await Invoice.findOneAndUpdate(
      { _id: invoiceId },
      {
        status: status,
        updatedAt: new Date(),
      },
      { new: true }
    );

    return res.send({
      success: true,
      data: updateInvoice,
      message: 'Success update invoice',
    });
  } catch (err) {
    console.log('err', err);
    next(err);
  }
};

export default { updateStatusInvoice, getInvoiceByLapakId };
