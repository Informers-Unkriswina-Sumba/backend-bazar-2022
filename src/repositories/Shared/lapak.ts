import { NextFunction, Request, Response } from 'express';
import Lapak from '../../db/mongodb/models/lapak';

const getLapakBySlugName = async (
  slugName: string,
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    let lapak = await Lapak.findOne({ slugName: slugName });
    if (!lapak) {
      return res.status(400).send({
        success: false,
        data: null,
        message: 'Lapak not found',
      });
    }

    return res.send({
      success: true,
      data: lapak,
      message: 'Success get lapak',
    });
  } catch (err) {
    console.log('err', err);
    next(err);
  }
};

const getListLapak = async (res: Response, next: NextFunction) => {
  try {
    const lapaks = await Lapak.find();

    return res.send({
      success: true,
      data: lapaks,
      message: 'Success get lapaks',
    });
  } catch (err) {
    console.log('err', err);
    next(err);
  }
};

const getLapakById = async (
  id: string,
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    let lapak = await Lapak.findById(id);
    if (!lapak) {
      return res.status(400).send({
        success: false,
        data: null,
        message: 'Lapak not found',
      });
    }

    return res.send({
      success: true,
      data: lapak,
      message: 'Success get lapak',
    });
  } catch (err) {
    console.log('err', err);
    next(err);
  }
};
export default { getLapakBySlugName, getListLapak, getLapakById };
