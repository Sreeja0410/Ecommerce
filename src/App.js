import './App.css';
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import {Route,Routes} from "react-router-dom"
import Products from "./components/Products.jsx"
import OneProduct from "./components/OneProduct.jsx"
import Cart from "./components/Cart.jsx"

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/products/:id" element={<OneProduct />} />
    <Route exact path="/cart" element={<Cart />} />
    </Routes>
    </>
  );
}

export default App;
