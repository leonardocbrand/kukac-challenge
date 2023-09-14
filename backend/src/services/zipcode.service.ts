import zipCodeRequest from '../utils/zipcode.request';

const getZipCodes = async (codes: string[]) => {
  const requests = codes.map(async (code) => {
    const { data } = await zipCodeRequest.get(`${code}/json/`);

    if (data.erro) {
      return {
        message: 'CEP inválido',
        cep: code,
      };
    }

    return data;
  });

  const response = await Promise.all(requests);

  return response;
};

export default { getZipCodes };
