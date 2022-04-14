import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Index from './components/Index';
import Purchase from './components/Purchase';

function App() {
  return (
    <div>
    {/* <Index /> */}

    <BrowserRouter>
    
        <Routes>

       
          <Route exact path='/' element={<Index />} />
          <Route exact path='/purchase' element={<Purchase />} />
         

        </Routes>

      </BrowserRouter>
    
    </div>
  );
}

export default App;
