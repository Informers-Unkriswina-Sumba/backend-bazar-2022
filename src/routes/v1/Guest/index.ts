import express from 'express';
import invoiceRouter from './invoice';
import keranjangRouter from './keranjang';

const guestRouter = express.Router();

guestRouter.use('/keranjang', keranjangRouter);
guestRouter.use('/invoice', invoiceRouter);

export default guestRouter;
