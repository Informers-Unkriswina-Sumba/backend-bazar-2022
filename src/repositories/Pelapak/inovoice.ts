import { NextFunction, Request, Response } from 'express';
import Invoice from '../../db/mongodb/models/invoice';

const updateStatusInvoice = async (
  invoiceId: string,
  status: string,
  req: Request | any,
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

export default { updateStatusInvoice };
