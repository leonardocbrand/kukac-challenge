import customError from "../errors/error";

const getMoneyCount = (total: number, divider: number ) => {
  const money = Math.floor(total / divider);
  const rest = total % divider;

  return [money, rest];
}

const getChange = async (productValue: number, paymentValue: number) => {
  const change = paymentValue - productValue;
  
  if (change < 0) {
    throw customError({
      name: 'BAD_REQUEST',
      statusCode: 400,
      message: 'Valor de pagamento menor que o valor do produto.'
    })
  }

  const [ hundreds, hundredsRest ] = getMoneyCount(change, 100);
  const [ tens, tensRest ] = getMoneyCount(hundredsRest, 10);
  const [ ones ] = getMoneyCount(tensRest, 1);

  const total = hundreds + tens + ones;

  const data = {
    total,
    paymentValue,
    change,
    hundreds,
    tens,
    ones,
  }

  return {
    message: 'Troco obtido com sucesso.',
    data,
  }
}

export default { getChange };
