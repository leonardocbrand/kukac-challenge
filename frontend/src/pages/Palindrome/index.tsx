import GenericTitle from '../../components/GenericTitle/GenericTitle';
import MainContainer from '../../components/MainContainer/MainContainer';
import SearchBar from './components/SearchBar';
import Board from './components/Board';
import palindromeAPI from '../../services/http/palindromeAPI';

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
