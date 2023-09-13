import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import api from '../../api';
import { ChangeParams } from './types';

const calculateChange = async ({ productValue, paymentValue }: ChangeParams) => {
  const { data } = await api.post('/change', {
    productValue,
    paymentValue,
  });

  return data;
};

const useCalculateChange = () => {
  return useMutation({
    mutationKey: ['change'],
    mutationFn: calculateChange,
    onSuccess: ({ message }) => toast.success(message),
    onError: (
      error: AxiosError,
    ) => toast.error(error?.response?.data?.message || 'Erro ao obter o troco'),
  });
};

export default { useCalculateChange };
