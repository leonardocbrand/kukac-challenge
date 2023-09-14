import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Palindrome from '../pages/Palindrome';
import Change from '../pages/Change';
import Zipcode from '../pages/Zipcode';
import { Vehicles } from '../pages/Vehicles';

function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/palindrome" element={ <Palindrome /> } />
      <Route path="/change" element={ <Change /> } />
      <Route path="/vehicles" element={ <Vehicles /> } />
      <Route path="/zipcode" element={ <Zipcode /> } />
    </Routes>
  );
}

export default Router;
