import express from 'express';
import { asyncErrorHandler } from '../../../middleware';
import SummaryController from '../../../controller/Summary/summary';

const summaryRouter = express.Router();

summaryRouter.get(
  '/total-data',
  asyncErrorHandler(SummaryController.getTotalData)
);
summaryRouter.get(
  '/best-performance-lapak',
  asyncErrorHandler(SummaryController.getBestPerformanceLapak)
);
summaryRouter.get(
  '/best-performance-mahasiswa',
  asyncErrorHandler(SummaryController.getBestPerformanceMahasiswa)
);
export default summaryRouter;
