import express from 'express';
import guestRouter from './Guest';
import sharedRouter from './Shared';
import pelapakRouter from './Pelapak';

const router = express.Router();

router.use('/guest', guestRouter);
router.use('/pelapak', pelapakRouter);
router.use('/shared', sharedRouter);

export default router;
