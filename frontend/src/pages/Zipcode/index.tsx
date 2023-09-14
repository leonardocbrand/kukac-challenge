import { useContext } from 'react';
import { Button } from '@mui/material';
import GenericTitle from '../../components/GenericTitle/GenericTitle';
import MainContainer from '../../components/MainContainer/MainContainer';
import zipcodeAPI from '../../services/http/zipcodeAPI';
import { ModalContext } from '../../contexts/modalContext';
import FormModal from './components/FormModal';
import GenericTable from '../../components/CustomTable/CustomTable';
import { zipcodeColumn } from '../../data/columnList';

function Zipcode() {
  const { setIsOpen } = useContext(ModalContext);

  const { mutate, data, isLoading } = zipcodeAPI.useSearchZipcodes();

  return (
    <MainContainer>
      <GenericTitle>
        Pesquise por 5 CEPs
      </GenericTitle>
      <Button
        variant="contained"
        sx={ { color: 'white', width: '40%', m: 4 } }
        onClick={ () => setIsOpen(true) }
      >
        Pesquisar
      </Button>
      <FormModal mutate={ mutate } />
      {data && <GenericTable
        dataList={ data }
        loading={ isLoading }
        columnList={ zipcodeColumn }
      />}
    </MainContainer>
  );
}

export default Zipcode;
