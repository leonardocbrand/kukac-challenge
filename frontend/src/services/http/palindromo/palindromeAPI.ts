import { useMutation } from "@tanstack/react-query";
import api from "../../api";
import { PalindromeParams } from "./types";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const calculatePalindrome = async ({ initial, end }: PalindromeParams) => {
  const { data } = await api.post('/palindrome', {
    initial,
    end
  })

  return data;
}

const useCalculatePalindrome = () => {
  return useMutation({
    mutationKey: ['palindrome'],
    mutationFn: calculatePalindrome,
    onSuccess: ({ message }) => toast.success(message),
    onError: (error: AxiosError) =>  toast.error(error?.response?.data?.message || 'Erro ao obter palindromos' ),
  })
}

export default {useCalculatePalindrome};

