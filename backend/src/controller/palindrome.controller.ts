import { NextFunction, Request, Response } from 'express';
import palindromeService from '../services/palindrome.service';

const getPalindromes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { initial, end } = req.body;

    const palindrome = await palindromeService.getPalindromes(initial, end);

    return res.status(200).json(palindrome);
  } catch (error) {
    next(error);
  }
};

export default { getPalindromes };
