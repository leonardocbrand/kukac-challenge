import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import api from '../../api';
import { VehiclesParams } from './types';
import { queryClient } from '../../queryClient';

const registerVehicle = async (
  { anoDeFabricacao,
    marca,
    modelo,
    vehicleType,
    passageiros,
    quantidadeDePortas }: VehiclesParams,
) => {
  const { data } = await api.post('/vehicle', {
    anoDeFabricacao,
    marca,
    modelo,
    vehicleType,
    passageiros,
    quantidadeDePortas,
  });

  return data;
};

const getVehicles = async () => {
  const { data } = await api.get('/vehicle');

  return data;
};

const useRegisterVehicle = () => {
  return useMutation({
    mutationKey: ['registerVehicle'],
    mutationFn: registerVehicle,
    onSuccess: ({ message }) => {
      queryClient.invalidateQueries({ queryKey: ['getVehicle'] });
      toast.success(message);
    },
    onError: (
      error: AxiosError,
    ) => toast.error(error?.response?.data?.message || 'Erro ao registar o veículo'),
  });
};

const useGetVehicles = () => {
  return useQuery({
    queryKey: ['getVehicle'],
    queryFn: getVehicles,
    onSuccess: ({ message }) => toast.success(message),
    onError: (
      error: AxiosError,
    ) => toast.error('Erro ao buscar os veículos'),
  });
};

export default { useRegisterVehicle, useGetVehicles };
