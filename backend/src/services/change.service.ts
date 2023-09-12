const getChange = async (productValue: number, paymentValue: number) => {
  const change = paymentValue - productValue;

  const hundreds = Math.floor(change / 100);
  const hundredsRest = change % 100;
  const tens = Math.floor(hundredsRest / 10);
  const tensRest = hundredsRest % 10;
  const ones = Math.floor(tensRest);

  console.log(hundredsRest);

  return {
    hundreds,
    tens,
    ones
  }


  // let changeValue = paymentValue - productValue;
  // let hundreds = 0;
  // let tens = 0;
  // let ones = 0;

  // while (changeValue !== 0) {
  //   if (changeValue >= 100) {
  //     hundreds += 1;
  //     changeValue = changeValue - 100;
  //   }
  
  //   if (changeValue >= 10 && changeValue < 100) {
  //     tens += 1;
  //     changeValue = changeValue - 10;
  //   }
  
  //   if (changeValue >= 1 && changeValue < 10) {
  //     ones += 1 ;
  //     changeValue = changeValue - 1;
  //   }
  // }



  // const minimunChangeValue = hundreds + tens + ones;
    
  // return [{
  //   minimunChangeValue,
  //   minimunChangeDetails: {
  //     hundreds,
  //     tens,
  //     ones,
  //   },
  //   productValue,
  //   change,
  // }]
}

export default { getChange };