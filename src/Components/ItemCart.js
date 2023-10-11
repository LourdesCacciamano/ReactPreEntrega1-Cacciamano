import React from 'react'
import { useCartContext } from './CartContext'


const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
  return (
    <div className='itemCart'>
        <img className='imgItemCart' src={product.img} alt={product.title} />
        <div className='descriptionItemCart'>
            <h2 className='titleItemCart'>{product.title}</h2>
            <p className='cantidadItemCart'>Cantidad: {product.quantity}</p>
            <p className='precioItemCart'>Precio Unitario: ${product.price}</p>
            <p className='subtotalItemCart'>Subtotal: ${product.quantity * product.price}</p>
            <button onClick={()=> removeProduct(product.id)} className='btnEliminarItemCart'>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart