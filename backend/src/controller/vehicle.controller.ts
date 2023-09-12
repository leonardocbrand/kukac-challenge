import { NextFunction, Request, Response } from 'express';
import vehicleService from '../services/vehicle.service';

const getVehicles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const palindrome = await vehicleService.getVehicle();
  
    return res.status(200).json(palindrome)

  } catch(error) {
    next(error)
  }
}

const createVehicles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;

    const newVehicle = await vehicleService.createVehicle(name);

    return res.status(200).json(newVehicle)

  } catch(error) {
    next(error)
  }
}

export default { getVehicles, createVehicles };
