import { Paper, TextField, Button, Stack } from '@mui/material';
import { useState } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { PalindromeParams } from '../../../services/http/palindromo/types';
import { IntervalsType } from '../types';

type SearchBarProps = {
  mutate: UseMutateFunction<any, AxiosError<unknown, any>, PalindromeParams, unknown>,
};

function SearchBar({ mutate }: SearchBarProps) {
  const [intervals, setIntervals] = useState({} as IntervalsType);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setIntervals((prev) => (
      {
        ...prev,
        [name]: Number(value),
      }
    ));
  };

  const handleClick = () => {
    mutate(intervals);
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
        label="Intervalo inicial"
        size="small"
        variant="outlined"
        type="text"
        name="initial"
        onChange={ handleChange }
      />
      <TextField
        label="Intervalo final"
        size="small"
        variant="outlined"
        name="end"
        type="text"
        onChange={ handleChange }
      />
      <Button
        onClick={ handleClick }
        variant="contained"
      >
        Buscar
      </Button>
    </Paper>
  );
}

export default SearchBar;
