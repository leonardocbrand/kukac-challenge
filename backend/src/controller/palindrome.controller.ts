import { Request, Response } from 'express';
import palindromeService from '../services/palindrome.service';

const getPalindromes = async (req: Request, res: Response) => {
  const initial = Number(req.body.initial);
  const end = Number(req.body.end)

  const palindrome = await palindromeService.getPalindromes(initial, end);

  return res.status(200).json({
    palindrome,
  })
}

export default { getPalindromes };