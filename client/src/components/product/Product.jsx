import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './product.css'
export const Product = () => {
    const { id } = useParams()

const [count,setCount] = useState(0)
    const [product, setProduct] = useState([])

    console.log(product)

    useEffect(() => {
        getAllData()
    }, [])

    const getAllData = () => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((res) => setProduct(res))
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
                <button onClick={()=>setCount(count+1)}>Like</button>
                <button  disabled={count<=0} onClick={()=>setCount(count-1)}>Unlike</button>
                </div>

            </div>
        </div>
    )
}
