import express from 'express';
import { asyncErrorHandler } from '../../../middleware';
import PenilaianAnggotaSharedController from '../../../controller/Shared/penilaianAnggota';

const penilaianAnggotaRouter = express.Router();

penilaianAnggotaRouter.post(
  '/create',
  asyncErrorHandler(PenilaianAnggotaSharedController.createPenilaianAnggota)
);

penilaianAnggotaRouter.get(
  '/find/:guestId/:nim',
  asyncErrorHandler(
    PenilaianAnggotaSharedController.getPenilaianAnggotaByNimAndGuest
  )
);

penilaianAnggotaRouter.get(
  '/list',
  asyncErrorHandler(PenilaianAnggotaSharedController.getListPenilaian)
);

export default penilaianAnggotaRouter;
