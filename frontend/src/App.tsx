import { ThemeProvider } from '@mui/material';
import Router from './routes/Router';
import theme from './themes/theme';
import NavBar from './components/NavBar/NavBar';
import { ModalProvider } from './contexts/modalContext';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <ModalProvider>
        <NavBar />
        <Router />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
