import express from 'express';
import keranjangRouter from './keranjang';

const guestRouter = express.Router();

guestRouter.use('/keranjang', keranjangRouter);

export default guestRouter;
