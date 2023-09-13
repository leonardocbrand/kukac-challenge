import { Paper, TextField, Button, Stack } from '@mui/material';
import { useState } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ChangeParams } from '../../../services/http/palindromo/types';
import { ChangesType } from '../types';

type SearchBarProps = {
  mutate: UseMutateFunction<any, AxiosError<unknown, any>, ChangeParams, unknown>,
};

function SearchBar({ mutate }: SearchBarProps) {
  const [values, setValues] = useState({} as ChangesType);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setValues((prev) => (
      {
        ...prev,
        [name]: Number(value),
      }
    ));
  };

  const handleClick = () => {
    mutate(values);
  };

  return (
    <Paper
      elevation={ 2 }
      component={ Stack }
      direction={ { xs: 'column', md: 'row' } }
      spacing={ 5 }
      mt={ 4 }
      sx={ { p: 2 } }
    >
      <TextField
        label="Valor do produto"
        size="small"
        variant="outlined"
        type="text"
        name="productValue"
        onChange={ handleChange }
      />
      <TextField
        label="Valor pago"
        size="small"
        variant="outlined"
        name="paymentValue"
        type="text"
        onChange={ handleChange }
      />
      <Button
        onClick={ handleClick }
        variant="contained"
        size="small"
      >
        Calcular Troco
      </Button>
    </Paper>
  );
}

export default SearchBar;
