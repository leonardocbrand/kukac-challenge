import GenericTitle from '../../components/GenericTitle/GenericTitle';
import MainContainer from '../../components/MainContainer/MainContainer';
import palindromeAPI from '../../services/http/palindromo/palindromeAPI';
import SearchBar from './components/SearchBar';
import Board from './components/Board';

function Palindrome() {
  const { mutate, data } = palindromeAPI.useCalculatePalindrome();

  return (
    <MainContainer>
      <GenericTitle>
        Palindromos
      </GenericTitle>
      <SearchBar mutate={ mutate } />
      <Board data={ data } />
    </MainContainer>
  );
}

export default Palindrome;
