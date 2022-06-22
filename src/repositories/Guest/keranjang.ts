import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Keranjang from '../../db/mongodb/models/keranjang';

const addProduct = async (
  payload: {
    idGuest: string;
    productId: string;
  },
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    // const product = Pro (cari produk dulu yak harusnya)
    console.log('payload', payload);
    const keranjang = await Keranjang.findOne({
      guestId: payload.idGuest,
      productId: payload.productId,
    });

    if (keranjang) {
      return res.status(400).send({
        success: false,
        data: null,
        message: 'Product already in cart',
      });
    }

    const newKeranjang = await Keranjang.create({
      guestId: payload.idGuest,
      productId: payload.productId,
      created_at: new Date(),
    });

    return res.send({
      success: true,
      data: newKeranjang,
      message: 'Success add product to cart',
    });
  } catch (err) {
    console.log('err', err);
    next(err);
  }
};

const findAll = async (
  idGuest: string,
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    // const product = Pro (cari produk dulu yak harusnya)
    const keranjang = await Keranjang.find({
      idGuest: idGuest,
    });

    return res.send({
      success: true,
      data: keranjang,
      message: 'Success get cart',
    });
  } catch (err) {
    console.log('err', err);
    next(err);
  }
};

const deleteCart = async (
  cartId: string,
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    // const product = Pro (cari produk dulu yak harusnya)
    const id = new mongoose.Types.ObjectId(cartId);
    const keranjang = await Keranjang.findByIdAndDelete(id);
    console.log('keranjang', keranjang);

    return res.send({
      success: true,
      data: keranjang,
      message: 'Success delete cart',
    });
  } catch (err) {
    console.log('err', err);
    next(err);
  }
};

export default { addProduct, findAll, deleteCart };
