import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
    query GetProducts {
        allProducts {
            id
            name
            description
            price
            image
            category {
                name
            }
        }
    }
`;

export {
    GET_PRODUCTS
}