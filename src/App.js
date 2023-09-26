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
import CartWidget from './Components/CartWidget';


function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>  
      <Brand/>
      <Routes>
        <Route path={'/'} element={<ItemListContainer/>}/>
        <Route path={'/category/:id'} element={<ItemListContainer/>}/>
        <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
        <Route path={'/cart'} element={<CartWidget/>}/>
        <Route path={'*'} element={<ErrorRouter/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
