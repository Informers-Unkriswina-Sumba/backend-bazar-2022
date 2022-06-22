import express from 'express';
import { asyncErrorHandler } from '../../../middleware';
import GuestKeranjangController from '../../../controller/Guest/keranjang';

const keranjangRouter = express.Router();

keranjangRouter.post(
  '/add',
  asyncErrorHandler(GuestKeranjangController.addProduct)
);

keranjangRouter.get(
  '/find-all/:guestId',
  asyncErrorHandler(GuestKeranjangController.findAll)
);

keranjangRouter.delete(
  '/delete/:id',
  asyncErrorHandler(GuestKeranjangController.deleteCart)
);

export default keranjangRouter;
