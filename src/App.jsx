import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '@graphql/queries';
import ProductList from "@containers/ProductList"
import ShopActions from "@containers/ShopActions"
import Header from "@components/Header"

const App = () => {
  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS, {
    variables: { categoryId: undefined }
  });
  const products = data?.productsByCategory

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>    
      <Header />
      <div className="App">
        <ShopActions refetch={refetch}/>
        <ProductList products={ products }/>
      </div>
    </>
  )
}

export default App
