import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Palindrome from '../pages/Palindrome';
import Change from '../pages/Change';
import Vehicles from '../pages/Vehicles';

function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/palindrome" element={ <Palindrome /> } />
      <Route path="/change" element={ <Change /> } />
      <Route path="/vehicles" element={ <Vehicles /> } />
    </Routes>
  );
}

export default Router;
