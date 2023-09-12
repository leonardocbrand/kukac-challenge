import { Router } from "express";
import vehicleController from "../controller/vehicle.controller";

const router = Router();

router.get('/vehicle', vehicleController.getVehicles);	

export default router;
