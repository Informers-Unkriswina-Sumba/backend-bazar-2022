import express from 'express';
import authRouter from './auth';
import invoiceRouter from './invoice';

const pelapakRouter = express.Router();

pelapakRouter.use('/auth', authRouter);
pelapakRouter.use('/invoice', invoiceRouter);

export default pelapakRouter;
