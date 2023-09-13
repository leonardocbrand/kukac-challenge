import { Router } from "express";
import vehicleController from "../controller/vehicle.controller";
import validateVehicle from "../middlewares/validateVehicle.middleware";

const router = Router();

router.get('/vehicle', vehicleController.getVehicles);	
router.post('/vehicle', validateVehicle, vehicleController.createVehicles);

export default router;
