import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/error";

const errorMiddleware = (error: CustomError, _req: Request, res: Response, _next: NextFunction) => {
  const { statusCode = 500, message } = error;

  return res.status(statusCode).json({
    message,
  })
}

export default errorMiddleware;