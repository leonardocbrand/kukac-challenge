import { useContext } from 'react';
import { Button } from '@mui/material';
import GenericTitle from '../../components/GenericTitle/GenericTitle';
import MainContainer from '../../components/MainContainer/MainContainer';
import FormModal from './components/FormModal';
import CustomTable from '../../components/CustomTable/CustomTable';
import { ModalContext } from '../../contexts/modalContext';
import { carsColumn, motorcyclesColumn } from '../../data/columnList';
import Tabs from './components/Tabs';
import { VehiclesParams } from '../../services/http/types';
import vehiclesAPI from '../../services/http/vehiclesAPI';

function Vehicles() {
  const { setIsOpen } = useContext(ModalContext);

  const { mutate } = vehiclesAPI.useRegisterVehicle();
  const { data, isLoading } = vehiclesAPI.useGetVehicles();

  const cars = data
    ?.filter((vehicle: VehiclesParams) => vehicle.vehicleType === 'car');

  const motorcycles = data
    ?.filter((vehicle: VehiclesParams) => vehicle.vehicleType === 'motorcycle');

  return (
    <MainContainer>
      <GenericTitle>
        Veículos
      </GenericTitle>
      <Button
        sx={ { width: '40%', m: 4, color: 'white' } }
        color="primary"
        variant="contained"
        onClick={ () => setIsOpen(true) }
      >
        Cadastrar veículo
      </Button>
      <FormModal mutate={ mutate } />
      <Tabs
        carsTable={ <CustomTable
          dataList={ cars }
          loading={ isLoading }
          columnList={ carsColumn }
        /> }
        motorcyclesTable={
          <CustomTable
            dataList={ motorcycles }
            loading={ isLoading }
            columnList={ motorcyclesColumn }
          />
        }
      />
    </MainContainer>
  );
}

export default Vehicles;
