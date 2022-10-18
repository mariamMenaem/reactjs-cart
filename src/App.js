
import Products from "./components/products/Products";
import Nav from './components/Nav/Nav';
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checout"
import { Route, BrowserRouter as Router , Routes } from 'react-router-dom'

function App() {
  return (
    <>

      <Router>
      <Nav></Nav>
        <Routes>
          <Route exact path="/" element={<Products />}>
            
          </Route>
          <Route path="/cart" element={<Cart />}>
            
          </Route>
          <Route path="/checkout" element={<Checkout />}>
            
            </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
