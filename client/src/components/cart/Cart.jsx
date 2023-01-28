import React from 'react'

import './Cart.css'
export const Cart = () => {
    const product = JSON.parse(localStorage.getItem("product"));
  
    console.log(product)

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
