import { NextFunction, Request, Response } from 'express';
import PenilaianAnggota from '../../db/mongodb/models/penilaianAnggota';
import Product from '../../db/mongodb/models/product';
import PenilaianLapak from '../../db/mongodb/models/penilaianLapak';
import Lapak from '../../db/mongodb/models/lapak';
import Invoice from '../../db/mongodb/models/invoice';

const getTotalData = async (res: Response, next: NextFunction) => {
  try {
    const lapak = await Lapak.countDocuments();
    const product = await Product.countDocuments();
    const invoice = await Invoice.countDocuments();
    const pelapak = 204; // data total mahasiswa

    const data = {
      totalLapak: lapak,
      totalProduk: product,
      totalInvoice: invoice,
      totalPelapak: pelapak,
    };

    return res.send({
      success: true,
      data: data,
      message: 'Success get total data',
    });
  } catch (err) {
    console.log('err', err);
    next(err);
  }
};

const getBestPerformanceLapak = async (res: Response, next: NextFunction) => {
  try {
    let lapaks = await PenilaianLapak.aggregate([
      {
        $group: {
          _id: { source: '$lapakId', status: '$status' },
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
    ]);

    let data: any[] = [];
    for (const lapak of lapaks) {
      const info = await Lapak.findById(lapak._id.source).select(
        '_id namaKelompok namaLapak deskripsi logo slugName'
      );
      const review = await PenilaianLapak.find({
        lapakId: lapak._id.source,
      }).select('_id rating description createdAt');
      data.push({
        info,
        review,
      });
    }

    return res.send({
      success: true,
      data: data,
      message: 'Success get best performance lapak',
    });
  } catch (err) {
    console.log('err', err);
    next(err);
  }
};

const getBestPerformanceMahasiswa = async (
  res: Response,
  next: NextFunction
) => {
  try {
    let mahasiswa = await PenilaianAnggota.aggregate([
      {
        $group: {
          _id: { source: '$nim', status: '$status' },
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 20 },
    ]);

    let data: any[] = [];
    for (const mhs of mahasiswa) {
      const info = await PenilaianAnggota.find({ nim: mhs._id.source }).select(
        '_id nim description createdAt'
      );
      data.push({
        totalRating: mhs.count,
        dataRating: info,
      });
    }

    return res.send({
      success: true,
      data: data,
      message: 'Success get best performance mahasiswa',
    });
  } catch (err) {
    console.log('err', err);
    next(err);
  }
};

export default {
  getTotalData,
  getBestPerformanceLapak,
  getBestPerformanceMahasiswa,
};
