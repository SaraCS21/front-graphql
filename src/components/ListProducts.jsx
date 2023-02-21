import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_PRODUCTS = gql`
    query GetProducts {
        allProducts {
            id
            name
        }
    }
`;

const ListProducts = () => {

    const { loading, error, data } = useQuery(GET_PRODUCTS);
    console.log(data)

    return (
        <div>ListProducts</div>
    )
}

export default ListProducts;