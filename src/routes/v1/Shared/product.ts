import express from 'express';
import { asyncErrorHandler } from '../../../middleware';
import ProductSharedController from '../../../controller/Shared/product';

const productRouter = express.Router();

productRouter.get(
  '/detail/:productId',
  asyncErrorHandler(ProductSharedController.getProductById)
);

productRouter.get(
  '/lapak/:lapakId',
  asyncErrorHandler(ProductSharedController.getProductByLapak)
);

export default productRouter;
