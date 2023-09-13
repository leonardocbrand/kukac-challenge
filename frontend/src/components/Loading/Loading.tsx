import { CircularProgress } from '@mui/material';

type Props = {
  color?:
  | 'primary'
  | 'inherit'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning'
};

export default function Loading({ color = 'primary' }: Props) {
  return (
    <CircularProgress color={ color } />
  );
}
