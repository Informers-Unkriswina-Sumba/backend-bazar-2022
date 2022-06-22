import express from 'express';
import { asyncErrorHandler } from '../../../middleware';
import InvoiceSharedController from '../../../controller/Shared/inovoice';

const invoiceRouter = express.Router();

invoiceRouter.get(
  '/print/:invoiceId',
  asyncErrorHandler(InvoiceSharedController.printInvoice)
);

export default invoiceRouter;
