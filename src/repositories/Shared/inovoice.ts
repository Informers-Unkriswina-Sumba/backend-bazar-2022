import { NextFunction, Request, Response } from 'express';
import createInvoice from '../../helpers/createInvoice';
import Invoice from '../../db/mongodb/models/invoice';
//Required package
// import pdf from 'pdf-creator-node';

// const options = {
//   format: 'A3',
//   orientation: 'portrait',
//   border: '10mm',
//   header: {
//     height: '45mm',
//     contents: '<div style="text-align: center;">Author: Shyam Hajare</div>',
//   },
//   footer: {
//     height: '28mm',
//     contents: {
//       first: 'Cover page',
//       2: 'Second page', // Any page number is working. 1-based index
//       default:
//         '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
//       last: 'Last Page',
//     },
//   },
// };

const printInvoice = async (
  invoiceId: string,
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    // const invoiceOld = await Invoice.findById(invoiceId);
    // Read HTML Template
    // const invoiceHTMLTemplate = fs.readFileSync(
    //   './template-invoiceOld.html',
    //   'utf8'
    // );

    // if (!invoiceOld) {
    //   return res.status(400).send({
    //     success: false,
    //     data: null,
    //     message: 'Invoice not found',
    //   });
    // }

    const products = [
      {
        name: 'Manggulu',
        harga: 15000,
        qty: 1,
      },
      {
        name: 'Manggulu',
        harga: 15000,
        qty: 2,
      },
    ];

    // const document = {
    //   html: invoiceHTMLTemplate,
    //   data: {
    //     products: products,
    //     createdAt: new Date(),
    //     status: 'Lunas',
    //     namaPembeli: 'Rendy',
    //     typePembeli: 'Mahasiswa',
    //     metodePembelian: 'COD',
    //   },
    //   path: `${Date.toString()}-invoice.pdf`,
    //   type: '',
    // };

    // pdf
    //   .create(document, options)
    //   .then((res: any) => {
    //     console.log(res);
    //   })
    //   .catch((error: any) => {
    //     console.log('error', error);
    //     next(error);
    //   });

    const invoice = {
      shipping: {
        name: 'John Doe',
        address: '1234 Main Street',
        city: 'San Francisco',
        state: 'CA',
        country: 'US',
        postal_code: 94111,
      },
      items: [
        {
          item: 'TC 100',
          description: 'Toner Cartridge',
          quantity: 2,
          amount: 6000,
        },
        {
          item: 'USB_EXT',
          description: 'USB Cable Extender',
          quantity: 1,
          amount: 2000,
        },
      ],
      subtotal: 8000,
      paid: 0,
      invoice_nr: 1234,
    };

    createInvoice(
      invoice,
      `files/invoices/${new Date().getTime().toString()}-invoice.pdf`
    );

    return res.send({
      success: true,
      data: null,
      message: 'Success print invoice',
    });
  } catch (err) {
    console.log('err', err);
    next(err);
  }
};

export default { printInvoice };
