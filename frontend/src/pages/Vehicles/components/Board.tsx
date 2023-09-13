import { Box, Button, Paper } from '@mui/material';
import { useContext } from 'react';
import { ModalContext } from '../../../contexts/modalContext';

function Board() {
  const { setIsOpen } = useContext(ModalContext);

  return (
    <Paper
      elevation={ 2 }
      sx={ {
        minHeight: 200,
        width: '50%',
        mt: 4,
      } }
    >
      <Box p={ 2 } borderBottom="1px solid black" display="flex" justifyContent="center">
        <Button
          sx={ { width: '80%' } }
          color="primary"
          variant="contained"
          onClick={ () => setIsOpen(true) }
        >
          Cadastrar veículo
        </Button>
      </Box>
    </Paper>
  );
}

export default Board;
