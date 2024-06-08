import React from 'react';
import useApi from '../utils/useApi.jsx'; 
import Card from './Card'; 

const Logic = () => {
    const products = useApi();
     console.log(products);
     const arr = products.reviews
    return (
        <div className='flex flex-wrap'>
            {products.map((product) => (
                <Card key={product.id} structure={product} />
            ))}
            {arr.map((reviews,index)=><Review key={index} struct={reviews}/>)}
        </div>
    );
};

export default Logic;
