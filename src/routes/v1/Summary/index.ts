import express from 'express';
import summaryRouter from './summary';

const summaryRouters = express.Router();

summaryRouters.use('/', summaryRouter);

export default summaryRouters;
