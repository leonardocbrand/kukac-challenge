import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Palindrome from '../pages/Palindrome';
import Change from '../pages/Change';

function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/palindrome" element={ <Palindrome /> } />
      <Route path="/change" element={ <Change /> } />
    </Routes>
  );
}

export default Router;
