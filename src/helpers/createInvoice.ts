import fs from 'fs';
import PDFDocument from 'pdfkit';

function createInvoice(invoice: any, path: any) {
  let doc = new PDFDocument({ size: 'A4', margin: 50 });

  generateHeader(doc);
  generateCustomerInformation(doc, invoice);
  generateInvoiceTable(doc, invoice);
  generateFooter(doc);
  generateFooterUpdatedAt(doc, invoice);
  doc.end();
  doc.pipe(fs.createWriteStream(path));
}

function generateHeader(doc: any) {
  doc
    .image('./logo.png', 50, 45, { width: 50 })
    .fillColor('#444444')
    .fontSize(20)
    .text('enTECHprenuership', 110, 57)
    .fontSize(10)
    .text('Universitas Kristen Wira Wacana Sumba.', 200, 65, { align: 'right' })
    .text('Fakultas sains dan teknologi', 200, 75, { align: 'right' })
    .text('Jl. R. Suprapto No.35, Prailiu', 200, 85, { align: 'right' })
    .text('Waingapu, Kabupaten Sumba Timur, Nusa Tenggara Timur', 200, 100, {
      align: 'right',
    })
    .moveDown();
}

function generateCustomerInformation(doc: any, invoice: any) {
  doc.fillColor('#444444').fontSize(20).text('Invoice', 50, 160);

  generateHr(doc, 185);

  const customerInformationTop = 200;
  // , 300, customerInformationTop + 15)
  doc
    .fontSize(10)
    .text('Nomor Invoice:', 50, customerInformationTop)
    .font('Helvetica-Bold')
    .text(invoice.invoiceNumber, 150, customerInformationTop)
    .text('Status Invoice:', 50, customerInformationTop + 15)
    .font('Helvetica-Bold')
    .text(invoice.status, 150, customerInformationTop + 15)
    .text('Metode Pembelian:', 50, customerInformationTop + 30)
    .font('Helvetica-Bold')
    .text(invoice.metodePembelian, 150, customerInformationTop + 30)
    .font('Helvetica')
    .text('Waktu dibuatkan:', 50, customerInformationTop + 60)
    .text(formatDate(invoice.createdAt), 150, customerInformationTop + 60)
    .text('Total Tagihan:', 50, customerInformationTop + 75)
    .text(
      formatCurrency(invoice.totalPesanan),
      150,
      customerInformationTop + 75
    )
    .font('Helvetica-Bold')
    .text(invoice.pembeli.nama, 300, customerInformationTop)
    .font('Helvetica')
    .text(invoice.pembeli.type, 300, customerInformationTop + 15)
    .text(
      'Waingapu, Nusa Tenggara Timur, Indonesia',
      300,
      customerInformationTop + 30
    )
    .moveDown();

  generateHr(doc, 252);
}

function generateInvoiceTable(doc: any, invoice: any) {
  let i;
  const invoiceTableTop = 330;

  doc.font('Helvetica-Bold');
  generateTableRow(
    doc,
    invoiceTableTop,
    'Item',
    'Harga Satuan',
    'Jumlah',
    'Total Harga'
  );
  generateHr(doc, invoiceTableTop + 20);
  doc.font('Helvetica');

  for (i = 0; i < invoice.items.length; i++) {
    const item = invoice.items[i];
    const position = invoiceTableTop + (i + 1) * 30;
    generateTableRow(
      doc,
      position,
      item.item,
      formatCurrency(item.amount),
      item.qty,
      formatCurrency(item.amount * item.qty)
    );

    generateHr(doc, position + 20);
  }

  const subtotalPosition = invoiceTableTop + (i + 1) * 30;
  generateTableRow(
    doc,
    subtotalPosition,
    '',
    'Total Belanja',
    '',
    formatCurrency(invoice.totalPesanan)
  );

  const paidToDatePosition = subtotalPosition + 20;
  // generateTableRow(
  //   doc,
  //   paidToDatePosition,
  //   '',
  //   'Paid To Date',
  //   '',
  //   formatCurrency(invoice.paid)
  // );

  const duePosition = paidToDatePosition + 25;
  doc.font('Helvetica-Bold');
  generateTableRow(
    doc,
    duePosition,
    '',
    'Total Tagihan',
    '',
    formatCurrency(invoice.totalPesanan)
  );
  doc.font('Helvetica');
}

function generateFooterUpdatedAt(doc: any, invoice: any) {
  doc
    .fontSize(10)
    .text(`Terakhir diupdate pada ${invoice.updatedAt}`, 50, 765, {
      align: 'center',
      width: 500,
    });
}

function generateFooter(doc: any) {
  doc
    .fontSize(10)
    .text(
      `Invoice ini sah dan diproses oleh komputer. silakan hub nomor dibawah ini jika butuh bantuan: 082217971133`,
      50,
      750,
      { align: 'center', width: 500 }
    );
}
function generateTableRow(
  doc: any,
  y: any,
  item: any,
  unitCost: any,
  quantity: any,
  lineTotal: any
) {
  doc
    .fontSize(10)
    .text(item, 50, y)
    .text(unitCost, 280, y, { width: 90, align: 'right' })
    .text(quantity, 370, y, { width: 90, align: 'right' })
    .text(lineTotal, 0, y, { align: 'right' });
}

function generateHr(doc: any, y: any) {
  doc.strokeColor('#aaaaaa').lineWidth(1).moveTo(50, y).lineTo(550, y).stroke();
}

function formatCurrency(cents: any) {
  return 'Rp. ' + cents;
}

function formatDate(date: any) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return year + '/' + month + '/' + day;
}

export default createInvoice;
