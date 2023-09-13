import GenericTitle from '../../components/GenericTitle/GenericTitle';
import MainContainer from '../../components/MainContainer/MainContainer';
import changeAPI from '../../services/http/palindromo/changeAPI';
import Board from './components/Board';
import SearchBar from './components/SearchBar';

function Change() {
  const { mutate, data } = changeAPI.useCalculateChange();

  return (
    <MainContainer>
      <GenericTitle>
        Calcule o troco
      </GenericTitle>
      <SearchBar mutate={ mutate } />
      <Board data={ data } />
    </MainContainer>
  );
}

export default Change;
