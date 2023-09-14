import { NextFunction, Request, Response } from 'express';
import customError from '../errors/error';

const validateVehicle = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { modelo, anoDeFabricacao, quantidadeDePortas, marca, passageiros, vehicleType } = req.body;

    validateField(modelo, 'string', 'modelo');
    validateField(anoDeFabricacao, 'string', 'anoDeFabricacao');
    validateField(marca, 'string', 'marca');
    validateField(vehicleType, 'string', 'vehicleType');

    validateYear(Number(anoDeFabricacao));

    if (vehicleType === 'car') {
      validateField(quantidadeDePortas, 'number', 'quantidadeDePortas');
    } else if (vehicleType === 'motorcycle') {
      validateField(passageiros, 'number', 'passageiros');
    } else {
      throw customError({
        name: 'BAD_REQUEST',
        statusCode: 400,
        message: 'O tipo de veículo só pode ser car ou motorcycle.',
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};

const validateField = <T>(value: T, type: string, fieldName: string) => {
  if (value === undefined || value === null) {
    throw customError({
      name: 'VALIDATION_ERROR',
      statusCode: 400,
      message: `${fieldName} é um campo obrigatório.`,
    });
  }

  if (typeof value !== type) {
    throw customError({
      name: 'VALIDATION_ERROR',
      statusCode: 400,
      message: `O tipo de ${fieldName} é invalido.`,
    });
  }
};

const validateYear = (year: number) => {
  const currentYear = new Date().getFullYear();
  if (year < 1950 || year > currentYear) {
    throw customError({
      name: 'VALIDATION_ERROR',
      statusCode: 400,
      message: `O ano de ${year} é invalido.`,
    });
  }
};

export default validateVehicle;
