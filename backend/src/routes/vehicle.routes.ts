import { Router } from "express";
import vehicleController from "../controller/vehicle.controller";

const router = Router();

router.get('/vehicle', vehicleController.getVehicles);	
router.post('/vehicle', vehicleController.createVehicles);

export default router;
