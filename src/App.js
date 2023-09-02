import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';
import "./Components/NavBar.css";
import "./Components/ItemListContainer.css";
import Brand from './Components/Brand';
import "./Components/Brand.css";

import rosa from "./Components/imagenes/rosas.jpg";
import gerbera from "./Components/imagenes/gerbera.jpg";
import alstroemeria from "./Components/imagenes/alstroemeria.jpg";



function App() {
  return (
    <div>
      <NavBar/>
      <Brand/>
      <section className="principal">
         <ItemListContainer greeting="ROSA" img={rosa} price="$16.000" cart={<i class="bi bi-cart-plus"></i>}/>
         <ItemListContainer greeting="GERBERA" img={gerbera} price="$12.000" cart={<i class="bi bi-cart-plus"></i>}/>
         <ItemListContainer greeting="ALSTROEMERIA" img={alstroemeria} price="$5.000" cart={<i class="bi bi-cart-plus"></i>}/>
      </section>
     
    </div>
  );
}

export default App;
