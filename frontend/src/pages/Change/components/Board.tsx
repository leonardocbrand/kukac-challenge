import { Paper, Box, Typography } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { ChangeResponse } from '../../../services/http/palindromo/types';

type BoardProps = {
  data: ChangeResponse,
};

function Board({ data }: BoardProps) {
  return (
    <Paper
      component="section"
      elevation={ 2 }
      sx={ {
        minHeight: 300,
        minWidth: 255,
        width: '50%',
        mt: 4,
        p: 2,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly' } }
    >
      {data ? (
        <>
          <Box
            display="flex"
            flexDirection={ { xs: 'column', md: 'row' } }
            alignItems="start"
            justifyContent="space-around"
          >
            <Box display="flex" alignItems="center" p={ 1 }>
              <MonetizationOnIcon color="primary" />
              <Typography variant="body1" fontWeight={ 700 } ml={ 1 }>
                {`Valor pago: ${data?.data.paymentValue}`}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" p={ 1 }>
              <MonetizationOnIcon color="primary" />
              <Typography variant="body1" fontWeight={ 700 } ml={ 1 }>
                {`Troco: ${data?.data.change}`}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" p={ 1 }>
              <LocalAtmIcon color="primary" />
              <Typography variant="body1" fontWeight={ 700 } ml={ 1 }>
                {`Total de notas: ${data?.data.total}`}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box display="flex" alignItems="center" p={ 1 }>
              <LocalAtmIcon color="primary" />
              <Typography variant="body1" ml={ 1 }>
                {`Notas de 100: ${data?.data.hundreds}`}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" p={ 1 }>
              <LocalAtmIcon color="primary" />
              <Typography variant="body1" ml={ 1 }>
                {`Notas de 10: ${data?.data.tens}`}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" p={ 1 }>
              <LocalAtmIcon color="primary" />
              <Typography variant="body1" ml={ 1 }>
                {`Notas de 1: ${data?.data.ones}`}
              </Typography>
            </Box>
          </Box>
        </>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Typography
            variant="h5"
            textAlign="center"
            fontWeight={ 400 }
            color="#F2B201"
            sx={ { opacity: '30%' } }
          >
            Aguardando valores
          </Typography>
        </Box>
      )}
    </Paper>
  );
}

export default Board;
