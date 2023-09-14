import { NextFunction, Request, Response } from 'express';
import zipcodeService from "../services/zipcode.service";

const getZipCodes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { codes } = req.body

    console.log(codes);
  
    const zipCodes = await zipcodeService.getZipCodes(codes);

    return res.status(200).json(zipCodes)

  } catch(error) {
    next(error)
  }
}

export default { getZipCodes };