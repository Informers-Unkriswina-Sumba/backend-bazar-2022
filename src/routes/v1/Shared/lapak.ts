import express from 'express';
import { asyncErrorHandler } from '../../../middleware';
import LapakSharedController from '../../../controller/Shared/lapak';

const lapakRouter = express.Router();

lapakRouter.get(
  '/slug-name/:slugName',
  asyncErrorHandler(LapakSharedController.getLapakBySlugName)
);

lapakRouter.get('/list', asyncErrorHandler(LapakSharedController.getListLapak));

export default lapakRouter;
