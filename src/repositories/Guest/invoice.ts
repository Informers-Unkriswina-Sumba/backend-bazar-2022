import { NextFunction, Request, Response } from 'express';
import { IRequestCreateInvoiceGuest } from '../../interface/IInvoice';
import mongoose from 'mongoose';
import Invoice from '../../db/mongodb/models/invoice';

const generateInvoice = async (
  payload: IRequestCreateInvoiceGuest,
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    // const product = Pro (cari produk dulu yak harusnya)
    console.log('payload', payload);
    const newInvoice = await Invoice.create({
      guestId: payload.guestId,
      namaPembeli: payload.dataPembeli.nama,
      typePembeli: payload.dataPembeli.type,
      metodePembelian: payload.metodePembelian,
      produk: payload.produk,
      status: 'belumLunas',
      createdAt: new Date(),
    });

    if (newInvoice) {
      return res.status(400).send({
        success: false,
        data: null,
        message: 'Failed generate invoice',
      });
    }

    return res.send({
      success: true,
      data: newInvoice,
      message: 'Success generate invoice',
    });
  } catch (err) {
    console.log('err', err);
    next(err);
  }
};

export default { generateInvoice };
