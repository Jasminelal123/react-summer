import { useState, useEffect } from 'react';

const useApi = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setProducts(data.products);
        };

        fetchProducts();
    }, []);

    return products; 
};

export default useApi;

