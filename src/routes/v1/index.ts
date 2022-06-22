import express from 'express';
import guestRouter from './Guest';
import sharedRouter from './Shared';

const router = express.Router();

router.use('/guest', guestRouter);
router.use('/shared', sharedRouter);
export default router;
