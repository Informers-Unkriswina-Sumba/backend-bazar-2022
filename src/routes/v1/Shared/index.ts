import express from 'express';
import invoiceRouter from './invoice';

const sharedRouter = express.Router();

sharedRouter.use('/invoice', invoiceRouter);

export default sharedRouter;
