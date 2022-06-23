import express from 'express';
import { asyncErrorHandler } from '../../../middleware';
import GuestInvoiceController from '../../../controller/Guest/invoice';

const invoiceRouter = express.Router();

invoiceRouter.post(
  '/generate',
  asyncErrorHandler(GuestInvoiceController.generateInvoice)
);

export default invoiceRouter;
