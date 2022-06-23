import { NextFunction, Request, Response } from 'express';
import Product from '../../db/mongodb/models/product';

const getProductById = async (
  id: string,
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(400).send({
        success: false,
        data: null,
        message: 'Product not found',
      });
    }

    return res.send({
      success: true,
      data: product,
      message: 'Success get product',
    });
  } catch (err) {
    console.log('err', err);
    next(err);
  }
};

const getProductByLapak = async (
  lapakId: string,
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await Product.find({
      lapak: lapakId,
    });

    return res.send({
      success: true,
      data: products,
      message: 'Success get products',
    });
  } catch (err) {
    console.log('err', err);
    next(err);
  }
};

export default { getProductById, getProductByLapak };
