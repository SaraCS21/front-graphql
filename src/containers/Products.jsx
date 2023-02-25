import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '@graphql/queries';
import Loading from '@components/Loading';
import Error from '@components/Error';
import ProductList from "@containers/ProductList";
import ShopActions from "@containers/ShopActions";

const Products = () => {
  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS, {
    variables: { categoryId: undefined }
  });

  const products = data?.productsByCategory
    
  if (loading) return <Loading />;
  if (error) return <Error message={`Error : ${error.message}`}/>;
      
  return (
    <>
      <ShopActions refetch={refetch}/>
      <ProductList products={ products }/>
    </>
  )
}

export default Products