import React from 'react';
import{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import products from "./products.json";
import ItemList from './ItemList';


const ItemListContainer = () => {
  const[item, setItem]=useState([]);
  const {id}=useParams();

  useEffect(()=>{
    const fetchData = async ()=> {
      try{
          const data = await new Promise((resolve)=>{
            setTimeout(()=>{
              resolve(id ? products.filter(item => item.category === id): products)
            },2000);
          });
          setItem(data);
      }catch(error){
        console.log("Error: ", error);
      }
    };
    fetchData();
  },[id])



  return (
    <div className='container'>
      <div className='row'>
         <ItemList item={item}/>
      </div>
    </div>
  
  )
}

export default ItemListContainer