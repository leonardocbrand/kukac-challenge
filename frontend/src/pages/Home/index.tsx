import { Box } from '@mui/material';
import GenericTitle from '../../components/GenericTitle/GenericTitle';
import MainContainer from '../../components/MainContainer/MainContainer';
import challengesList from '../../data/challengesList';
import ChallengeCard from './components/ChallengeCard';

function Home() {
  return (
    <MainContainer sx={ { justifyContent: 'center' } }>
      <GenericTitle>
        Bem vindo
      </GenericTitle>
      <Box
        component="section"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        gap={ 5 }
        pt={ 5 }
      >
        {challengesList.map((challenge) => (
          <ChallengeCard
            key={ challenge.name }
            name={ challenge.name }
            imgSrc={ challenge.imgSrc }
            imgAlt={ `${challenge.name} logo` }
            path={ challenge.path }
          />
        ))}
      </Box>
    </MainContainer>
  );
}

export default Home;
