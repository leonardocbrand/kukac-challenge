import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import zipcodeService from './zipcode.service';

const { getZipCodes } = zipcodeService;

describe('getZipCodes', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('deve retornar dados válidos para CEP válido', async () => {
    const mockResponse = [
      {
        cep: '01001-000',
        logradouro: 'Praça da Sé',
        complemento: 'lado ímpar',
        bairro: 'Sé',
        localidade: 'São Paulo',
        uf: 'SP',
        ibge: '3550308',
        gia: '1004',
        ddd: '11',
        siafi: '7107',
      },
      {
        cep: '01001-001',
        logradouro: 'Praça da Sé',
        complemento: 'lado par',
        bairro: 'Sé',
        localidade: 'São Paulo',
        uf: 'SP',
        ibge: '3550308',
        gia: '1004',
        ddd: '11',
        siafi: '7107',
      },
      {
        cep: '01001-001',
        logradouro: 'Praça da Sé',
        complemento: 'lado par',
        bairro: 'Sé',
        localidade: 'São Paulo',
        uf: 'SP',
        ibge: '3550308',
        gia: '1004',
        ddd: '11',
        siafi: '7107',
      },
      {
        cep: '01001-001',
        logradouro: 'Praça da Sé',
        complemento: 'lado par',
        bairro: 'Sé',
        localidade: 'São Paulo',
        uf: 'SP',
        ibge: '3550308',
        gia: '1004',
        ddd: '11',
        siafi: '7107',
      },
      {
        cep: '01001-001',
        logradouro: 'Praça da Sé',
        complemento: 'lado par',
        bairro: 'Sé',
        localidade: 'São Paulo',
        uf: 'SP',
        ibge: '3550308',
        gia: '1004',
        ddd: '11',
        siafi: '7107',
      },
    ];

    mock.onGet(/.*/).reply(200, mockResponse);

    const codes = ['01001000', '01001001', '01001001', '01001001', '01001001'];

    const result = await getZipCodes(codes);

    expect(result).toEqual(mockResponse);
  });
});
