export type PalindromeParams = {
  initial: number,
  end: number,
};

export type PalindromeResponse = {
  message: string,
  data: number[],
};

export type ChangeParams = {
  productValue: number,
  paymentValue: number,
};

export type ChangeResponse = {
  message: string,
  data: {
    total: number,
    paymentValue: number,
    change: number,
    hundreds: number,
    tens: number,
    ones: number,
  }
};

export type VehiclesParams = {
  modelo: string,
  anoDeFabricacao: string,
  quantidadeDePortas?: number,
  passageiros?: number,
  marca: string,
  vehicleType: string,
};

export type ZipcodeParams = {
  codes: string[],
};
