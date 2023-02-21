import ProductList from "@containers/ProductList"
import Header from "@components/Header"

const App = () => {
  return (
    <>    
      <Header />
      <div className="App">
        <ProductList />
      </div>
    </>
  )
}

export default App
