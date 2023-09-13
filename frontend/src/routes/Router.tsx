import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Palindrome from '../pages/Palindrome';

function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/palindrome" element={ <Palindrome /> } />
    </Routes>
  );
}

export default Router;
