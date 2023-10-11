import React from 'react'
import { useCartContext } from './CartContext'

const CartWidget = () => {
  const{totalProducts, cart}=useCartContext();
  return (
    <div>
      <button type="button" className="btn colorCartButton position-relative">
        <i class="bi bi-cart-check carrito"></i>
        <span className="color position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalProducts() ||cart}</span>
       </button>
    </div>
  
  )
}

export default CartWidget