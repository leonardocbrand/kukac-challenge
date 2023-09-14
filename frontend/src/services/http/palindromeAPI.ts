import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import api from '../api';
import { PalindromeParams } from './types';

const calculatePalindrome = async ({ initial, end }: PalindromeParams) => {
  const { data } = await api.post('/palindrome', {
    initial,
    end,
  });

  return data;
};

const useCalculatePalindrome = () => {
  return useMutation({
    mutationKey: ['palindrome'],
    mutationFn: calculatePalindrome,
    onSuccess: ({ message }) => toast.success(message),
    onError: (
      error: AxiosError<{ message: string }>,
    ) => {
      toast.error(error?.response?.data?.message || 'Erro ao obter palindromos');
    },
  });
};

export default { useCalculatePalindrome };
