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

const GET_PRODUCT = gql`
    query Product($productId: ID!) {
        product(id: $productId) {
        name,
        description,
        price,
        categoryId
        }
    }
`;

const GET_CATEGORIES = gql`
    query getCategories {
        allCategories {
            id
            name
        }
    }
`;

export {
    GET_PRODUCTS,
    GET_PRODUCT,
    GET_CATEGORIES
}