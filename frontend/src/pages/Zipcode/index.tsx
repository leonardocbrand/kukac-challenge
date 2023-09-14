import { useEffect } from 'react';
import { Button } from '@mui/material';
import GenericTitle from '../../components/GenericTitle/GenericTitle';
import MainContainer from '../../components/MainContainer/MainContainer';
import zipcodeAPI from '../../services/http/zipcodeAPI';

function Zipcode() {
  const { mutate, data } = zipcodeAPI.useSearchZipcodes();

  useEffect(() => {
    mutate({ codes: ['01001000', '01001001', '01001001', '01001001', '01001001'] });
  }, []);

  return (
    <MainContainer>
      <GenericTitle>
        Pesquise por 5 CEPs
      </GenericTitle>
      <Button variant="contained" sx={ { color: 'white', width: '40%', m: 4 } }>
        Pesquisar
      </Button>
    </MainContainer>
  );
}

export default Zipcode;
