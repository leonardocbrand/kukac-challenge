import { NextFunction, Request, Response } from 'express';
import customError from '../errors/error';

const validateZipCode = (req: Request, res: Response, next: NextFunction) => {
  const { codes } = req.body;

  try {
    if (codes.length !== 5) {
      throw customError({
        name: 'VALIDATION_ERROR',
        statusCode: 400,
        message: 'Digite 5 CEPs válidos.',
      });
    }

    codes.map((code: string) => verifyZipCode(code));

    next();
  } catch (error) {
    next(error);
  }
};

const verifyZipCode = (code: string) => {
  if (!code || code.length !== 8) {
    throw customError({
      name: 'VALIDATION_ERROR',
      statusCode: 400,
      message: 'CEP inválido.',
    });
  }
};

export default validateZipCode;
