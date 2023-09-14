import palindromeService from './palindrome.service';

describe('getPalindrome', () => {
  it('Testa a função em caso de sucesso', async () => {
    const expectedResponse = {
      message: 'Palindromos obtidos com sucesso.',
      data: [11],
    };

    const response = await palindromeService.getPalindromes(10, 20);

    expect(response).toEqual(expectedResponse);
  });

  it('Deve lançar um erro para intervalo final menor que 10', async () => {
    await expect(palindromeService.getPalindromes(15, 5)).rejects.toThrow(
      'Informe um intervalo válido, iniciando do número 10.',
    );
  });

  it('Deve lançar um erro para um intervalo sem palíndromos', async () => {
    await expect(palindromeService.getPalindromes(105, 110)).rejects.toThrow(
      'Não há nenhum palindromo neste intervalo.',
    );
  });
});
