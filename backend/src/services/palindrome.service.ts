import customError from '../errors/error';

const getPalindromes = async (initial: number, end: number) => {
  const palindromesArray = [];

  if (initial < 10 || end < 10) {
    throw customError({
      name: 'BAD_REQUEST',
      statusCode: 400,
      message: 'Informe um intervalo válido, iniciando do número 10.',
    });
  }

  for (let index = initial; index < end; index += 1) {
    const reversedNumber = index.toString().split('').reverse().join('');

    if (reversedNumber === index.toString()) {
      palindromesArray.push(index);
    }
  }

  if (palindromesArray.length === 0) {
    throw customError({
      name: 'NOT_FOUND',
      statusCode: 404,
      message: 'Não há nenhum palindromo neste intervalo.',
    });
  }

  return {
    message: 'Palindromos obtidos com sucesso.',
    data: palindromesArray,
  };
};

export default { getPalindromes };
