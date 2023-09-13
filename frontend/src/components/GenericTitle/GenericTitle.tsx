import { Typography } from '@mui/material';
import { ReactNode } from 'react';

type GenericTitleProps = {
  children: ReactNode
  sx?: object
};

function GenericTitle({ children, sx = {} }: GenericTitleProps) {
  return (
    <Typography
      variant="h1"
      fontSize={ 36 }
      fontWeight={ 700 }
      color="#F3B202"
      sx={ { ...sx } }
    >
      {children}
    </Typography>
  );
}

export default GenericTitle;
