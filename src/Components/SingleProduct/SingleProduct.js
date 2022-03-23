import React from 'react';
import { addCartData, removeCartData } from '../../Utilits/storeage';

const SingleProduct = (props) => {
    const {id,price,name}=props.data;
    //add to cart
    const addToCart = (id)=>{
        addCartData(id)
    }

    //remove
    const removeToCart=(id)=>{
        removeCartData(id)
    }

    return (
        <div className='col-5 bg-info  p-3 rounded m-5'>
            <h1>Name:{name}</h1>
            <h2>Price:{price}</h2>
            <h3>ID:{id}</h3>
            <button className='btn btn-warning' onClick={() => addToCart(id)}>Add to Cart</button>
            <button className='btn btn-danger' onClick={() => removeToCart(id)}>Remove to Cart</button>
        </div>
    );
};

export default SingleProduct;