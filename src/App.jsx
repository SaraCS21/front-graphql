import ProductList from "@containers/ProductList"
import ShopActions from "@containers/ShopActions"
import Header from "@components/Header"

const App = () => {
  return (
    <>    
      <Header />
      <div className="App">
        <ShopActions />
        <ProductList />
      </div>
    </>
  )
}

export default App
