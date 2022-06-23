import express from 'express';
import invoiceRouter from './invoice';
import lapakRouter from './lapak';
import productRouter from './product';

const sharedRouter = express.Router();

sharedRouter.use('/invoice', invoiceRouter);
sharedRouter.use('/lapak', lapakRouter);
sharedRouter.use('/product', productRouter);

export default sharedRouter;
