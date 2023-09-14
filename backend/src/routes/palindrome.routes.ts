import { Router } from 'express';
import palindromeController from '../controller/palindrome.controller';

const router = Router();

router.post('/palindrome', palindromeController.getPalindromes);

export default router;
