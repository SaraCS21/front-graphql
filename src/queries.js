import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
    query GetProducts {
        allProducts {
            id
            name
        }
    }
`;

export {
    GET_PRODUCTS
}