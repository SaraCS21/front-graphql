import React from 'react';
import { useQuery } from '@apollo/client';
import { v4 as uuidv4 } from "uuid";
import { GET_PRODUCTS } from '../queries';

const ProductList = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    const products = data?.allProducts

    console.log(products)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <ul>
            {
                products.map(product => <li key={uuidv4()}>{product.name}</li>)
            }
        </ul>
    )
}

export default ProductList;