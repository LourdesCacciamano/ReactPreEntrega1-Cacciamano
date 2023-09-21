import {useState,useEffect} from 'react'
import Products from "./Products.json";
import useContador from './useContador';

const Gerberas = () => {

  const[stock,setStock]=useState([]);
  useEffect(()=>{
          const gerberaProducts = Products.filter((produc)=>produc.category === "Gerberas")
          setStock(gerberaProducts)
  }, [])
  const[contador,sumar,restar]=useContador(0);

  return (
    <div className='container row row-cols-md-3'>
       
      {stock.map((produc,id)=>(
        <div className='container' key={id}> 

                    <div class="card " style={{width: "20rem"}}>
                        <img src={produc.imagen} class="card-img-top" alt="imagen de rosa"/>
                    <div class="card-body">
                        <h1 class="card-title name">{produc.name}</h1>
                        <p class="card-text description">{produc.description}</p>
                        <h5 class="card-text stock">{produc.stock}</h5>
                        <h2 class="card-text price ">{produc.price}</h2>
                        <section className='botones'>
                        <button className='agregar' onClick={restar}>Quitar</button>
                        <h2>{contador}</h2>
                        <button className='agregar' onClick={sumar}>Agregar</button>
                        </section>
                    </div>
                    </div>           
        </div>
         

            ))}
         
    </div>
         
  )
}

export default Gerberas