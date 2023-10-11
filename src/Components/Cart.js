import React from 'react';
import {Link} from "react-router-dom";
import { useCartContext } from './CartContext';
import ItemCart from './ItemCart';

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    if(cart.length === 0){
        return(
            <div className='compraVacioFlex'>
                <p className='pCompraVacio'>Carrito de Compra Vacío</p>
                <Link to={"/"} className='linkHacerCompra'>Hacer Compra🏵️</Link>
            </div>
        );
    }

  return (
    <>
        {cart.map((product) => (
            <ItemCart key={product.id} product={product} />
        ))}
        <hr className='lineaCart'/>
        <p className='totalCart'>Total de la Compra: ${totalPrice()}</p>
        <Link to="/checkout">
            {""}
            <button className='btnFinalizarCart'>Finalizar Compra</button>
        </Link>
    </>
  );
};

export default Cart