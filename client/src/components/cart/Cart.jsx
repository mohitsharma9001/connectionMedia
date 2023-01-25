import React from 'react'
import { useState } from 'react';
import './Cart.css'
export const Cart = () => {
    const product = JSON.parse(localStorage.getItem("product"));
    const [data,setData]= useState(product.price)
    console.log(product)

    const handleClick = ()=>{
        let data = product.price + product.price+ product.price
        setData(data)
    }
  return (
    <div className='mainCartDiv'>
        <div className='cartDiv'>
          
            <div>

          <img src={product.thumbnail} alt=""  className='img'/>
        <h4>Title : {product.title}</h4>
        <h4>Price : {product.price}</h4>
            </div>
       <div>
        <p>Brand : {product.brand}</p>
        <p>{product.description}</p>
       </div>
        </div>
    </div>
  )
}
