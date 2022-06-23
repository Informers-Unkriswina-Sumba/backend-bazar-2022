import { NextFunction, Request, Response } from 'express';
import createInvoice from '../../helpers/createInvoice';
import Invoice from '../../db/mongodb/models/invoice';
import Product from '../../db/mongodb/models/product';
import Lapak from '../../db/mongodb/models/lapak';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const printInvoice = async (
  invoiceId: string,
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    const invoice = await Invoice.findById(invoiceId); // harusnya populate lapak & produk
    const lapak = await Lapak.findById(invoice.lapak);
    console.log('invoice', invoice);
    if (!invoice) {
      return res.status(400).send({
        success: false,
        data: null,
        message: 'Invoice not found',
      });
    }

    let dataItems: any[] = [];
    let totalPesanan = 0;

    for (const item of invoice.produk) {
      const product = await Product.findById(item.id);
      dataItems.push({
        item: product.nama,
        qty: item.qty,
        amount: product.harga,
      });
      totalPesanan += product.harga * item.qty;
    }

    const invoiceData = {
      pembeli: {
        nama: invoice.namaPembeli,
        type: invoice.typePembeli,
      },
      metodePembelian: invoice.metodePembelian,
      status: invoice.status,
      createdAt: invoice.createdAt,
      updatedAt: invoice.updatedAt,
      items: dataItems,
      totalPesanan: totalPesanan,
      invoiceNumber: invoice.invoiceNumber,
      namaLapak: lapak.namaLapak,
    };

    const invoicePath = `files/invoices/${new Date()
      .getTime()
      .toString()}-invoice.pdf`;
    createInvoice(invoiceData, invoicePath);
    await delay(5000);

    return res.download(invoicePath); // Set disposition and send it.
    // return res.send({
    //   success: true,
    //   data: null,
    //   message: 'Success print invoice',
    // });
  } catch (err) {
    console.log('err', err);
    next(err);
  }
};

export default { printInvoice };
