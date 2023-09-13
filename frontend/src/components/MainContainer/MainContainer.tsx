import { Container } from '@mui/material';
import { ReactNode } from 'react';

type MainContainerProps = {
  children: ReactNode,
  sx?: object
};

function MainContainer({ children, sx = {} }: MainContainerProps) {
  return (
    <Container
      component="main"
      maxWidth="xl"
      sx={ {
        pt: '10vh',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        ...sx,
      } }
    >
      {children}
    </Container>
  );
}

export default MainContainer;
