import { Modal, Stack, Typography, Box, Button, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { modalStyle } from '../../Vehicles/components/styles/modal';
import { ModalContext } from '../../../contexts/modalContext';

type FormModalProps = {
  mutate: UseMutateFunction<any, AxiosError<unknown, any>, {
    codes: string[];
  }, unknown>
};

const INITIAL_STATE = {
  codes: ['', '', '', '', ''],
};

function FormModal({ mutate }: FormModalProps) {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const index = parseInt(name.replace('code', ''), 10);

    setFormData((prevData) => {
      const updatedCodes = [...prevData.codes];
      updatedCodes[index] = value;

      return {
        ...prevData,
        codes: updatedCodes,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(formData);
    setIsOpen(false);
    setFormData(INITIAL_STATE);
  };

  const cancelRegister = () => {
    setIsOpen(false);
    setFormData(INITIAL_STATE);
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
          name="0"
          label="CEP 1"
          placeholder='Ex: "01001000"'
          onChange={ handleChange }
        />
        <TextField
          variant="outlined"
          name="1"
          label="CEP 2"
          placeholder='Ex: "01001000"'
          onChange={ handleChange }
        />
        <TextField
          variant="outlined"
          name="2"
          label="CEP 3"
          placeholder='Ex: "01001000"'
          onChange={ handleChange }
        />
        <TextField
          variant="outlined"
          name="3"
          label="CEP 4"
          placeholder='Ex: "01001000"'
          onChange={ handleChange }
        />
        <TextField
          variant="outlined"
          name="4"
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
