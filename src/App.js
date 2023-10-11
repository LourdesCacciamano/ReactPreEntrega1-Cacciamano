import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';
import "./Components/NavBar.css";
import "./Components/ItemDetailContainer.css";
import Brand from './Components/Brand';
import "./Components/Brand.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorRouter from './Components/ErrorRouter';
import "./Components/ErrorRouter.css";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import CartShop from './Components/CartContext';
import Cart from './Components/Cart';
import "./Components/Cart.css";
import {Checkout} from "./Components/Checkout";
import Footer from './Components/Footer';
import "./Components/Footer.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <BrowserRouter>
      <CartShop>
      <NavBar/>  
      <Brand/>
      <Routes>
        <Route path={'/'} element={<ItemListContainer/>}/>
        <Route path={'/category/:id'} element={<ItemListContainer/>}/>
        <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
        <Route path={'/cart'} element={<Cart/>}/>
        <Route path={'/checkout'} element={<Checkout/>}/>
        <Route path={'*'} element={<ErrorRouter/>}/>
      </Routes>
      </CartShop>
      <ToastContainer />
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
