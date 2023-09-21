import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';
import "./Components/NavBar.css";
import "./Components/ItemListContainer.css";
import "./Components/ItemDetailContainer.css";
import Brand from './Components/Brand';
import "./Components/Brand.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rosas from "./Components/Rosas";
import Alstroemeria from "./Components/Alstroemerias";
import Gerberas from "./Components/Gerberas";
import CartWidget from './Components/CartWidget';
import ErrorRouter from './Components/ErrorRouter';


import rosa from "./Components/imagenes/rosas.jpg";
import gerbera from "./Components/imagenes/gerbera.jpg";
import alstroemeria from "./Components/imagenes/alstroemeria.jpg";



function App() {
  return (
    <div>
      
      
     
      <BrowserRouter>
      <NavBar/>  
      <Brand/>
      <Routes>
      
        <Route path='/inicio' element={<ItemListContainer greeting="ROSA" img={rosa} price="$16.000" cart={<i class="bi bi-cart-plus"></i>}/>}/>
        <Route path='/rosas' element={<Rosas/>}/>
        <Route path='/alstroemeria' element={<Alstroemeria/>}/>
        <Route path='/gerberas' element={<Gerberas/>}/>
        <Route path='/carrito' element={<CartWidget/>}/>
        <Route path='/*' element={<ErrorRouter/>}/>

      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
