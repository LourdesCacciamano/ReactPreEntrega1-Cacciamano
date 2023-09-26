import React from 'react';
import {useState, useEffect} from 'react'
import products from "./products.json";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
  const[item,setItem]=useState([]);
  const {id}=useParams();

  useEffect(()=>{
    const promesa = new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(products.find(item=> item.id === parseInt(id)));
      },2000)
    });
    promesa.then((data)=>{
      setItem(data)
    })

  },[id])
     

  return (
    <div className='container'>
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer