import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  return (
    <div className='row detail'>
    <div className='col-md-4 offset-md-4 deta'>
    <img src={item.imagen} className='img-fluid detailImg' alt={item.name} />
    <h2 className='detailName'>{item.name}</h2>
    <p className='detailDescrip'>{item.description}</p>
    <h3 className='detailPrice'>{item.price}</h3>
    <p className='detailStock'> Cantidad: {item.stock}</p>
    </div>
    <div>
    <ItemCount stockItems={20}/>
    </div>
    </div>
  )
}

export default ItemDetail