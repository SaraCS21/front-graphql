import { gql } from '@apollo/client';

const DELETE_PRODUCT= gql`
    # Delete Product by Id
    mutation DeleteProduct($deleteProductId: ID!) {
        deleteProduct(id: $deleteProductId)
    }
`;

export {
    DELETE_PRODUCT
}