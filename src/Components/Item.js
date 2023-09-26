import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
   <Link to={"/item/" + item.id} className='text-decoration-none'>
    <div className='container'>
        <div className='card-border border-0'>
            <img src={item.imagen} className='card-img-top itemImg' alt={item.name} />
            <div className='card-body text-center'>
                <p className='card-text itemName'>{item.name}</p>
            </div>
            <div className='card-body text-center'>
                <p className='card-text itemDescrip'>{item.description}</p>
            </div>
            <div className='card-body text-center'>
                <p className='card-text itemPrice'>{item.price}</p>
            </div>
        </div>
    </div>
   </Link>
  )
}

export default Item