import { Request, Response } from 'express';
import changeService from '../services/change.service';


const getChange = async (req: Request, res: Response) => {
  const productValue = Number(req.body.productValue);
  const paymentValue = Number(req.body.paymentValue)

  const change = await changeService.getChange(productValue, paymentValue);

  return res.status(200).json({
    change,
  })
}

export default { getChange };