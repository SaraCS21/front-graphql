import { v4 as uuidv4 } from "uuid";
import ProductItem from "@components/ProductItem"

const ProductList = ({ products }) => {

    return (
        <ul className='w-[85%] flex flex-wrap justify-center lg:justify-start mx-auto py-6'>
            {
                products.map(product => <ProductItem key={uuidv4()} product={product}/>)
            }
        </ul>
    )
}

export default ProductList;