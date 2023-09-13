import { Box, Paper, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type ChallengeCardProps = {
  name: string,
  imgSrc: string,
  imgAlt: string,
  path: string,
};

function ChallengeCard({ name, imgSrc, imgAlt, path }: ChallengeCardProps) {
  return (
    <Box component={ Link } to={ path } sx={ { textDecoration: 'none' } }>
      <Paper
        component={ Stack }
        elevation={ 5 }
        direction="column"
        spacing={ 2 }
        alignItems="center"
        p={ 2 }
        sx={ {
          transition: 'all 0.25s',
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.05)',
            rotate: '1deg',
          },
          borderRadius: '10%',
        } }
      >
        <Box
          component="img"
          src={ imgSrc }
          alt={ imgAlt }
          width={ 200 }
          height={ 200 }
        />
        <Typography variant="h6" fontWeight={ 300 } color="#F3B202">
          {name}
        </Typography>
      </Paper>
    </Box>
  );
}

export default ChallengeCard;
