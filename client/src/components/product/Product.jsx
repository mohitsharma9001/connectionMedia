import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import './product.css'
export const Product = () => {
    const { id } = useParams()
   const navigate= useNavigate()
const [count,setCount] = useState(0)
    const [product, setProduct] = useState([])

  

    useEffect(() => {
        getAllData()
    }, [])

    const getAllData = () => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((res) => setProduct(res))
    }

   const handleClick = ()=>{
    navigate("/cart",localStorage.setItem('product',JSON.stringify(product)))
   }

    return (
        <div className='productDivMain'>
            <div className='productDiv'>
                <div className='imgDivmain'>

                <img src={product.thumbnail} alt="" />
               
                 <p> {product.description}</p>
                </div>

                <div>
                <p className='title'>Title : {product.title}</p>
                <p className='title'>Brand : {product.brand}</p>
                <h4>Price : {product.price}</h4>
                <h4>Stock : {product.stock}</h4>
                <p className="rating">⭐⭐⭐⭐{product.rating}</p>
                <h4>{count}</h4>
                <button className='addButton' onClick={()=>setCount(count+1)}>Like</button>
                
                <button className='addButton' onClick={handleClick}>Add to cart</button>
                </div>

            </div>
        </div>
    )
}
