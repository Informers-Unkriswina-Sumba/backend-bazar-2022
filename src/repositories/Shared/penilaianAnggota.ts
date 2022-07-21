import { NextFunction, Request, Response } from 'express';
import PenilaianAnggota from '../../db/mongodb/models/penilaianAnggota';

const createPenilaianAnggota = async (
  payload: {
    guestId: string;
    nim: string;
    description: string;
  },
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    const penilaian = await PenilaianAnggota.findOne({
      guestId: payload.guestId,
      nim: payload.nim,
    });

    if (penilaian) {
      return res.status(400).send({
        success: false,
        data: null,
        message: 'Penilaian sudah dilakukan',
      });
    }

    const newPenilaian = await PenilaianAnggota.create({
      ...payload,
      createdAt: new Date(),
    });

    return res.send({
      success: true,
      data: newPenilaian,
      message: 'Success create penilaian anggota',
    });
  } catch (err) {
    console.log('err', err);
    next(err);
  }
};

const getPenilaianAnggotaByGuestAndNim = async (
  guestId: string,
  nim: string,
  res: Response,
  next: NextFunction
) => {
  try {
    const penilaian = await PenilaianAnggota.findOne({
      guestId: guestId,
      nim: nim,
    });

    if (!penilaian) {
      return res.status(400).send({
        success: false,
        data: null,
        message: 'Penilaian tidak ditemukan',
      });
    }

    return res.send({
      success: true,
      data: penilaian,
      message: 'Success get penilaian',
    });
  } catch (err) {
    console.log('err', err);
    next(err);
  }
};

const getListPenilaian = async (res: Response, next: NextFunction) => {
  try {
    // const penilaian = await PenilaianAnggota.find().select(
    //   '_id nim description createdAt'
    // );

    let mahasiswa = await PenilaianAnggota.aggregate([
      {
        $group: {
          _id: { source: '$nim', status: '$status' },
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
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

    if (!data) {
      return res.status(400).send({
        success: false,
        data: null,
        message: 'Gagal mendapatkan penilaian anggota',
      });
    }

    return res.send({
      success: true,
      data: data,
      message: 'Success get list penilaian anggota',
    });
  } catch (err) {
    console.log('err', err);
    next(err);
  }
};

export default {
  createPenilaianAnggota,
  getPenilaianAnggotaByGuestAndNim,
  getListPenilaian,
};
