import Carro from '../models/carro.model';
import Moto from '../models/moto.model';
import database from '../database/database';
import vehicleService from './vehicle.service';

// Crie um mock para a camada de banco de dados
const mockCreateData = jest.spyOn(database, 'createData');

describe('createVehicle', () => {
  afterEach(() => {
    // Limpe os mocks após cada teste
    mockCreateData.mockClear();
  });

  it('deve criar um carro corretamente', async () => {
    const carroMock = new Carro('Modelo', '2022', 4, 'Marca');
    const databaseMock = {
      id: 1,
      vehicleType: 'car',
      ...carroMock,
    };

    mockCreateData.mockResolvedValue(databaseMock);

    const result = await vehicleService.createVehicle('Modelo', '2022', 4, 'Marca', 0, 'car');

    expect(result.message).toBe('Veículo criado com sucesso.');
    expect(result.vehicle).toEqual(databaseMock);
  });

  it('deve criar uma moto corretamente', async () => {
    const motoMock = new Moto('Modelo', '2022', 'Marca', 2);
    const databaseMock = {
      id: 1,
      vehicleType: 'motorcycle',
      ...motoMock,
    };

    mockCreateData.mockResolvedValue(databaseMock);

    const result = await vehicleService.createVehicle('Modelo', '2022', 0, 'Marca', 2, 'motorcycle');

    expect(result.message).toBe('Veículo criado com sucesso.');
    expect(result.vehicle).toEqual(databaseMock);
  });
});
