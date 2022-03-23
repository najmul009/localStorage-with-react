import React, { useEffect, useState } from 'react';
import { getTotal } from '../../Utilits/redues';
import SingleProduct from '../SingleProduct/SingleProduct';

const Cosmatics = () => {
    const [cosmatics, setCosmatics] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmatics(data))
    },[])
    const total = getTotal(cosmatics)
    return (
        <div className='row'>
            <h2>money neded: {total}</h2>
            {
                cosmatics.map(product => <SingleProduct data={product}></SingleProduct>)
            }
        </div>
    );
};

export default Cosmatics;