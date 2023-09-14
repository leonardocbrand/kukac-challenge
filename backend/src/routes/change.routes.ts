import { Router } from 'express';
import changeController from '../controller/change.controller';

const router = Router();

router.post('/change', changeController.getChange);

export default router;
