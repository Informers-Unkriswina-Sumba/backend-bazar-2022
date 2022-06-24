import Lapak from '../../db/mongodb/models/lapak';
import { NextFunction, Request, Response } from 'express';
import PenilaianLapak from '../../db/mongodb/models/penilaianLapak';

const createPenilaianLapak = async (
  payload: {
    guestId: string;
    lapakId: string;
    rating: number;
    description: string;
  },
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    const lapak = await Lapak.findById(payload.lapakId);
    if (!lapak) {
      return res.status(400).send({
        success: false,
        data: null,
        message: 'Lapak not found',
      });
    }
    const penilaian = await PenilaianLapak.findOne({
      guestId: payload.guestId,
      lapakId: payload.lapakId,
    });
    if (penilaian) {
      return res.status(400).send({
        success: false,
        data: null,
        message: 'Penilaian sudah dilakukan',
      });
    }

    const newPenilaian = await PenilaianLapak.create({
      ...payload,
      createdAt: new Date(),
    });

    return res.send({
      success: true,
      data: newPenilaian,
      message: 'Success create penilaian lapak',
    });
  } catch (err) {
    console.log('err', err);
    next(err);
  }
};

const getPenilaianLapakByGuestAndLapakId = async (
  guestId: string,
  lapakId: string,
  res: Response,
  next: NextFunction
) => {
  try {
    const penilaian = await PenilaianLapak.findOne({
      guestId: guestId,
      lapakId: lapakId,
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

export default { createPenilaianLapak, getPenilaianLapakByGuestAndLapakId };
