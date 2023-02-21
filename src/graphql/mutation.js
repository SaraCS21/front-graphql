import { gql } from '@apollo/client';

const DELETE_PRODUCT= gql`
    # Delete Product by Id
    mutation DeleteProduct($deleteProductId: ID!) {
        deleteProduct(id: $deleteProductId)
    }
`;

const UPDATE_PRODUCT= gql`
    # Update Product by Id and Product Input
    mutation UpdateProduct($updateProductId: ID!, $input: UpdateProductInput!) {
        updateProduct(id: $updateProductId, input: $input) {
            name
        }
    }
`;

const CREATE_PRODUCT= gql`
    mutation createProduct($input: CreateProductInput!){
        addProduct(input: $input) {
            id,
            name,
            description
        }
    }
`;

export {
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    CREATE_PRODUCT
}