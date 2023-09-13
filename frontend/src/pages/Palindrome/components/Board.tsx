import { Paper, Stack } from '@mui/material';
import { DataType } from '../types';

type BoardProps = {
  data: DataType,
};

function Board({ data }: BoardProps) {
  return (
    <Paper
      elevation={ 2 }
      component="section"
      sx={ {
        height: 300,
        minWidth: 255,
        width: '75%',
        mt: 5,
        p: 2,
        overflowY: 'auto',
      } }
    >
      <Stack
        direction="row"
        gap={ 2 }
        flexWrap="wrap"
        alignItems="center"
        justifyContent={ { xs: 'center', md: 'normal' } }
      >
        {data?.data.map((num: number) => (
          <Paper
            key={ num }
            elevation={ 2 }
            sx={ { width: 100, textAlign: 'center', fontWeight: 500 } }
          >
            {num}
          </Paper>
        ))}
      </Stack>
    </Paper>
  );
}

export default Board;
