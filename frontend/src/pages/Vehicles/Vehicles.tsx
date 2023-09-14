import { useContext, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import * as React from 'react';
import GenericTitle from '../../components/GenericTitle/GenericTitle';
import MainContainer from '../../components/MainContainer/MainContainer';
import FormModal from './components/FormModal';
import { ModalContext } from '../../contexts/modalContext';
import Tabs from './components/Tabs';
import { VehiclesParams } from '../../services/http/types';
import vehiclesAPI from '../../services/http/vehiclesAPI';
import { TabsTypes } from './components/types';

function Vehicles() {
  const { setIsOpen } = useContext(ModalContext);

  const [tabValue, setTabValue] = React.useState<TabsTypes>('car');
  const [filteredData, setFilteredData] = useState<VehiclesParams[]>([]);

  const { mutateAsync } = vehiclesAPI.useRegisterVehicle();
  const { data, isLoading } = vehiclesAPI.useGetVehicles();

  const handleChange = (_event: React.SyntheticEvent, newValue: TabsTypes) => {
    setTabValue(newValue);
  };

  const handleMutate = async (submitData: VehiclesParams) => {
    await mutateAsync(submitData);
  };

  useEffect(() => {
    if (data) {
      const newFilteredData = data
        ?.filter((vehicle: VehiclesParams) => vehicle.vehicleType === tabValue);

      setFilteredData(newFilteredData);
    }
  }, [data, tabValue]);

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
      <FormModal mutate={ handleMutate } />
      <Tabs
        data={ filteredData }
        handleChange={ handleChange }
        isLoading={ isLoading }
        tabValue={ tabValue }
      />
    </MainContainer>
  );
}

export default Vehicles;
