import { createTheme } from '@mui/material/styles';

const appYellow = '#F2B201';
const appWhite = '#FFFF';

const theme = createTheme({
  palette: {
    primary: {
      main: appYellow,
    },
    secondary: {
      main: appWhite,
    },
  },
});

export default theme;
