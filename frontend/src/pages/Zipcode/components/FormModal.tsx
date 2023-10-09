import { Modal, Stack, Typography, Box, Button, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { modalStyle } from '../../Vehicles/components/styles/modal';
import { ModalContext } from '../../../contexts/modalContext';
import { ZipcodeType } from './types';

type FormModalProps = {
  mutate: UseMutateFunction<any, AxiosError<unknown, any>, {
    codes: string[];
  }, unknown>
};

function FormModal({ mutate }: FormModalProps) {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  const [formData, setFormData] = useState({} as ZipcodeType);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => (
      {
        ...prevData,
        [name]: value,
      }
    ));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const zipCodes = {
      codes: Object.values(formData),
    };

    mutate(zipCodes);
    setIsOpen(false);
    setFormData({} as ZipcodeType);
  };

  const cancelRegister = () => {
    setIsOpen(false);
    setFormData({} as ZipcodeType);
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
          Digite os CEPs
        </Typography>
        <TextField
          variant="outlined"
          name="code1"
          label="CEP 1"
          placeholder='Ex: "01001000"'
          onChange={ handleChange }
        />
        <TextField
          variant="outlined"
          name="code2"
          label="CEP 2"
          placeholder='Ex: "01001000"'
          onChange={ handleChange }
        />
        <TextField
          variant="outlined"
          name="code3"
          label="CEP 3"
          placeholder='Ex: "01001000"'
          onChange={ handleChange }
        />
        <TextField
          variant="outlined"
          name="code4"
          label="CEP 4"
          placeholder='Ex: "01001000"'
          onChange={ handleChange }
        />
        <TextField
          variant="outlined"
          name="code5"
          label="CEP 5"
          placeholder='Ex: "01001000"'
          onChange={ handleChange }
        />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Button
            variant="contained"
            onClick={ cancelRegister }
            type="button"
            sx={ { color: 'white' } }
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            type="submit"
            sx={ { color: 'white' } }
          >
            Cadastrar
          </Button>
        </Box>
      </Stack>
    </Modal>
  );
}

export default FormModal;
