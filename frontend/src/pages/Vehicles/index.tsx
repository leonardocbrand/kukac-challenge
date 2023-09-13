import { useEffect } from 'react';
import GenericTitle from '../../components/GenericTitle/GenericTitle';
import MainContainer from '../../components/MainContainer/MainContainer';
import vehiclesAPI from '../../services/http/palindromo/vehiclesAPI';
import Board from './components/Board';
import FormModal from './components/FormModal';

function Vehicles() {
  const { mutate } = vehiclesAPI.useRegisterVehicle();
  const { data } = vehiclesAPI.useGetVehicles();

  return (
    <MainContainer>
      <GenericTitle>
        Veículos
      </GenericTitle>
      <Board />
      <FormModal mutate={ mutate } />
      <Table />
    </MainContainer>
  );
}

export default Vehicles;
