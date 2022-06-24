import express from 'express';
import invoiceRouter from './invoice';
import lapakRouter from './lapak';
import penilaianAnggotaRouter from './penilaianAnggota';
import penilaianLapakRouter from './penilaianLapak';
import productRouter from './product';

const sharedRouter = express.Router();

sharedRouter.use('/invoice', invoiceRouter);
sharedRouter.use('/lapak', lapakRouter);
sharedRouter.use('/product', productRouter);
sharedRouter.use('/penilaian-anggota', penilaianAnggotaRouter);
sharedRouter.use('/penilaian-lapak', penilaianLapakRouter);

export default sharedRouter;
