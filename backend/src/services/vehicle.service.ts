import database from '../database/database';
import Carro from '../models/carro.model';
import Moto from '../models/moto.model';

const getVehicle = async () => {
  const { data } = await database.getData();

  return data;
};

const createCar = async (car: Carro) => {
  const newData = await database.createData<Carro>(car, 'car');

  return newData;
};

const createMotorcycle = async (motorcycle: Moto) => {
  const newData = await database.createData<Moto>(motorcycle, 'motorcycle');

  return newData;
};

const createVehicle = async (
  modelo: string,
  anoDeFabricacao: string,
  quantidadeDePortas: number,
  marca: string,
  passageiros: number,
  vehicleType: string,
) => {
  let vehicle;

  if (vehicleType === 'car') {
    const car = new Carro(modelo, anoDeFabricacao, quantidadeDePortas, marca);

    vehicle = await createCar(car);
  }

  if (vehicleType === 'motorcycle') {
    const motorcycle = new Moto(modelo, anoDeFabricacao, marca, passageiros);

    vehicle = await createMotorcycle(motorcycle);
  }

  return {
    message: 'Veículo criado com sucesso.',
    vehicle,
  };
};

export default { getVehicle, createVehicle };
