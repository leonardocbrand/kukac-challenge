const getPalindromes = async (initial: number, end: number) => {
  const palindromesArray = [];

  if (initial < 10 || end < 10) {
    return 'Digite um intervalo válido, que seja a partir do número 10.'
  }

  for (let index = initial; index < end; index += 1  ) {
    const reversedNumber = index.toString().split('').reverse().join('');
    
    if (reversedNumber === index.toString() ) {
      palindromesArray.push(reversedNumber);
    }
  }

  return palindromesArray;
};

export default { getPalindromes };