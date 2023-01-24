import { Home } from './components/home/Home';
import { Routes, Route } from 'react-router-dom'
import { Product } from './components/product/Product';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/productDetails/:id' element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
