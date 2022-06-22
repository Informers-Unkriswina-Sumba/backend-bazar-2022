import { NextFunction, Request, Response } from 'express';
import GuestKeranjangRepository from '../../repositories/Guest/keranjang';

const addProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await GuestKeranjangRepository.addProduct(req.body, req, res, next);
  } catch (err) {
    next(err);
  }
};

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await GuestKeranjangRepository.findAll(req.params.guestId, req, res, next);
  } catch (err) {
    next(err);
  }
};

const deleteCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await GuestKeranjangRepository.deleteCart(req.params.id, req, res, next);
  } catch (err) {
    next(err);
  }
};

export default { addProduct, findAll, deleteCart };
