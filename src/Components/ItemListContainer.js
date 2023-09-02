import React from 'react'



const ItemListContainer = ({greeting,img,price,cart}) => {
  return (
    <div>
    
    <section className="contenedorInfo">
        <h2 className="tituloRosa">{greeting}</h2>
        <img className="imgRosa" src={img} alt="flores"/>   

         <section className='contenedorInfo2'>
             <h3 className='precio'>{price}</h3>
             <h3>{cart}</h3>
         </section>
     
    </section>
    </div>
  
  )
}

export default ItemListContainer