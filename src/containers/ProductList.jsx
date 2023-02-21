import { useQuery } from '@apollo/client';
import { v4 as uuidv4 } from "uuid";
import { GET_PRODUCTS } from '../queries';
import ProductItem from "@components/ProductItem"

const ProductList = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    const products = data?.allProducts

    console.log(products)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <ul className='w-[85%] flex flex-wrap justify-between mx-auto py-6'>
            {
                products.map(product => <ProductItem key={uuidv4()} product={product}/>)
            }
        </ul>
    )
}

export default ProductList;