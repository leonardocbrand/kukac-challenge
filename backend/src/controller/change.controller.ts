import { NextFunction, Request, Response } from 'express';
import changeService from '../services/change.service';

const getChange = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { productValue, paymentValue } = req.body;

    const change = await changeService.getChange(productValue, paymentValue);

    return res.status(200).json(change);
  } catch (error) {
    next(error);
  }
};

export default { getChange };
