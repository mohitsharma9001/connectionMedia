import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

export const Home = () => {
    const [products, setProducts] = useState([])

    // console.log(products)

    useEffect(() => {
        getAllData()
    }, [])

    const getAllData = () => {
        fetch(`https://dummyjson.com/products`)
            .then((res) => res.json())
            .then((res) => setProducts(res.products))

    }



    return (
        <div className='productDiv'>
            <div className='product'>
                {
                    products.map((product) => {
                        return <div className='eachProduct'>
                            <div className='imgDiv'>
                                <img src={product.images[0]} alt="" />

                            </div>
                            <div className='desc'>
                            <p className="brandName">Brand-Name : {product.brand}</p>
                                <h4>Price : {product.price}</h4>
                                <p className="rating">⭐⭐⭐⭐{product.rating}</p>
                                <Link to={`/productDetails/${product.id}`}><button className='prodbutton'>Product Details</button></Link>


                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    )
}
