import React , {useState}from 'react'
import ItemCount from './ItemCount'
import { useCartContext } from './CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({item}) => {
  const[goToCart, setGoToCart]=useState(false);
  const {addProduct}=useCartContext()
  const onAdd = (quantity) =>{
    setGoToCart(true);
    addProduct(item,quantity);
  };


  return (
    <div className='row detail'>
    <div className='col-md-4 offset-md-4 deta'>
    <img src={item.img} className='img-fluid detailImg' alt={item.title} />
    <h2 className='detailName'>{item.title}</h2>
    <p className='detailDescrip'>{item.description}</p>
    <h3 className='detailPrice'>${item.price}</h3>
    <p className='detailStock'> Cantidad: {item.stock}</p>
    </div>
    <div>
    {goToCart ? <Link to='/cart' className='linkTerminarCompra'>Terminar compra</Link> :<ItemCount stock={20} initial={1} onAdd={onAdd} />}
    </div>
    </div>
  )
}

export default ItemDetail