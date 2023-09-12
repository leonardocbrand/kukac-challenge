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

export default { getVehicles };