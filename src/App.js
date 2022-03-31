import { Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import Products from './component/Products';
import {Switch} from 'react-router'



function App() {
  return (
    
    <div className='app'>

      <Routes>
        <Route exact path='/' element={<Homepage />} /> 
        <Route  path="/:categoryId/products" element={<Products />} /> 
      </Routes>
    </div>
  );
}

export default App;
