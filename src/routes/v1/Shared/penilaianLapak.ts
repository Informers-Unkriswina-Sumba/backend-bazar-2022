import express from 'express';
import { asyncErrorHandler } from '../../../middleware';
import PenilaianLapakSharedController from '../../../controller/Shared/penilaianLapak';

const penilaianLapakRouter = express.Router();

penilaianLapakRouter.post(
  '/create',
  asyncErrorHandler(PenilaianLapakSharedController.createPenilaianLapak)
);

penilaianLapakRouter.get(
  '/find/:guestId/:lapakId',
  asyncErrorHandler(
    PenilaianLapakSharedController.getPenilaianLapakByLapakAndGuest
  )
);

export default penilaianLapakRouter;
