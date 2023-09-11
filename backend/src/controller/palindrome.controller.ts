import { Request, Response } from 'express';
import palindromeService from '../services/palindrome.service';

const getPalindromes = async (req: Request, res: Response) => {
  const input = Number(req.body.input);

  const palindrome = await palindromeService.getPalindromes(input);

  return res.status(200).json({
    palindrome,
  })
}

export default { getPalindromes };