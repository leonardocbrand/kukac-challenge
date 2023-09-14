import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import api from '../api';

const searchZipcodes = async ({ codes }: { codes: string[] }) => {
  const { data } = await api.post('/zipcode', { codes });

  return data;
};

const useSearchZipcodes = () => {
  return useMutation({
    mutationKey: ['zipcode'],
    mutationFn: searchZipcodes,
    onSuccess: ({ message }) => toast.success(message),
    onError: (
      error: AxiosError,
    ) => toast.error(error?.response?.data?.message || 'Erro ao obter os CEPs'),
  });
};

export default { useSearchZipcodes };
