import { Box, Button, FormControl, InputLabel,
  MenuItem, Modal, Select, SelectChangeEvent,
  Stack, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { modalStyle } from './styles/modal';
import { ModalContext } from '../../../contexts/modalContext';
import { VehiclesParams } from '../../../services/http/palindromo/types';
import FormInputs from './FormInputs';

type FormModalProps = {
  mutate: UseMutateFunction<any, AxiosError<unknown, any>, VehiclesParams, unknown>
};

function FormModal({ mutate }: FormModalProps) {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  const [formData, setFormData] = useState({} as VehiclesParams);

  const handleChange = (e: SelectChangeEvent<string>
  | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'passageiros' || name === 'quantidadeDePortas') {
      setFormData((prev) => ({
        ...prev,
        [name]: Number(value),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(formData);
    setIsOpen(false);
  };

  const cancelRegister = () => {
    setIsOpen(false);
    setFormData({} as VehiclesParams);
  };

  return (
    <Modal
      open={ isOpen }
      onClose={ () => setIsOpen(false) }
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack
        sx={ modalStyle }
        component="form"
        spacing={ 2 }
        onSubmit={ handleSubmit }
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Dados do veículo
        </Typography>
        <FormControl sx={ { m: 1, minWidth: 80 } }>
          <InputLabel id="select-label">
            Veículo
          </InputLabel>
          <Select
            labelId="select-label"
            id="demo-simple-select-autowidth"
            name="vehicleType"
            value={ formData.vehicleType || '' }
            onChange={ handleChange }
            label="Veículo"
          >
            <MenuItem value="car">Carro</MenuItem>
            <MenuItem value="motorcycle">Moto</MenuItem>
          </Select>
        </FormControl>
        {formData.vehicleType === 'car' && (
          <FormInputs isCar handleChange={ handleChange } />
        )}
        {formData.vehicleType === 'motorcycle' && (
          <FormInputs handleChange={ handleChange } />
        )}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Button variant="contained" onClick={ cancelRegister } type="button">
            Cancelar
          </Button>
          <Button
            variant="contained"
            type="submit"
          >
            Cadastrar
          </Button>
        </Box>
      </Stack>
    </Modal>
  );
}

export default FormModal;
