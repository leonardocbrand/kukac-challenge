import changeService from './change.service';

describe('getChange', () => {
  it('Deve retornar o troco e as contagens corretas para um pagamento maior que o valor do produto', async () => {
    const productValue = 50;
    const paymentValue = 100;

    const result = await changeService.getChange(productValue, paymentValue);

    expect(result.message).toBe('Troco obtido com sucesso.');
    expect(result.data.paymentValue).toBe(paymentValue);
    expect(result.data.change).toBe(paymentValue - productValue);
    expect(result.data.hundreds).toBe(0);
    expect(result.data.tens).toBe(5);
    expect(result.data.ones).toBe(0);
    expect(result.data.total).toBe(5);
  });

  it('Deve lançar um erro para pagamento menor que o valor do produto', async () => {
    const productValue = 100;
    const paymentValue = 50;

    await expect(changeService.getChange(productValue, paymentValue)).rejects.toThrow(
      'Valor de pagamento menor que o valor do produto.',
    );
  });

  it('Deve retornar um troco de zero para pagamento igual ao valor do produto', async () => {
    const productValue = 75;
    const paymentValue = 75;

    const result = await changeService.getChange(productValue, paymentValue);

    expect(result.message).toBe('Troco obtido com sucesso.');
    expect(result.data.paymentValue).toBe(paymentValue);
    expect(result.data.change).toBe(0);
    expect(result.data.hundreds).toBe(0);
    expect(result.data.tens).toBe(0);
    expect(result.data.ones).toBe(0);
    expect(result.data.total).toBe(0);
  });
});
