import { Home } from './components/home/Home';
import { Routes, Route } from 'react-router-dom'
import { Product } from './components/product/Product';
import { Navbar } from './components/navbar/Navbar';
import { Cart } from './components/cart/Cart';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/productDetails/:id' element={<Product />}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
