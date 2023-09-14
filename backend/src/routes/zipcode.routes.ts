import { Router } from 'express';
import zipcodeController from '../controller/zipcode.controller';
import validateZipCode from '../middlewares/validateZipCode.middleware';

const router = Router();

router.post('/zipcode', validateZipCode, zipcodeController.getZipCodes);

export default router;
