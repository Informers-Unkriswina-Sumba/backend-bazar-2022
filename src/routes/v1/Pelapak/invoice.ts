import express from 'express';
import { asyncErrorHandler } from '../../../middleware';
import PelapakInvoiceController from '../../../controller/Pelapak/invoice';
import { isPelapakAuth } from '../../../middleware/pelapakAuth';

const invoiceRouter = express.Router();

invoiceRouter.get(
  '/list/:lapakId',
  asyncErrorHandler(isPelapakAuth),
  asyncErrorHandler(PelapakInvoiceController.getList)
);

invoiceRouter.post(
  '/update-status',
  asyncErrorHandler(isPelapakAuth),
  asyncErrorHandler(PelapakInvoiceController.updateStatusInvoice)
);

export default invoiceRouter;
