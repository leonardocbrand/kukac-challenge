import { useContext } from 'react';
import { Button } from '@mui/material';
import GenericTitle from '../../components/GenericTitle/GenericTitle';
import MainContainer from '../../components/MainContainer/MainContainer';
import vehiclesAPI from '../../services/http/palindromo/vehiclesAPI';
import FormModal from './components/FormModal';
import CustomTable from '../../components/CustomTable/CustomTable';
import { ModalContext } from '../../contexts/modalContext';
import { vehiclesColumn } from '../../data/columnList';

function Vehicles() {
  const { setIsOpen } = useContext(ModalContext);

  const { mutate } = vehiclesAPI.useRegisterVehicle();
  const { data, isLoading } = vehiclesAPI.useGetVehicles();

  return (
    <MainContainer>
      <GenericTitle>
        Veículos
      </GenericTitle>
      <Button
        sx={ { width: '40%', m: 4 } }
        color="primary"
        variant="contained"
        onClick={ () => setIsOpen(true) }
      >
        Cadastrar veículo
      </Button>
      <FormModal mutate={ mutate } />
      <CustomTable
        dataList={ data }
        loading={ isLoading }
        columnList={ vehiclesColumn }
      />
    </MainContainer>
  );
}

export default Vehicles;
