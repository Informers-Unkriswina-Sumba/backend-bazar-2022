import express from 'express';
import { asyncErrorHandler } from '../../../middleware';
import PelapakAuthController from '../../../controller/Pelapak/auth';
import { isPelapakAuth } from '../../../middleware/pelapakAuth';

const authRouter = express.Router();

authRouter.post('/login', asyncErrorHandler(PelapakAuthController.login));

authRouter.post(
  '/check-login',
  asyncErrorHandler(PelapakAuthController.checkLogin)
);

authRouter.post(
  '/logout',
  asyncErrorHandler(isPelapakAuth),
  asyncErrorHandler(PelapakAuthController.logout)
);

export default authRouter;
