import './App.css'
import Cart from './component/Cart';
import Login from './component/Login';
import Navbar from './component/Navbar'
import ProductDetail from './component/ProductDetail';
import ProductList from './view/ProductList';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { CartProvider } from './contex/CartContext'
import Dashboard from './component/Admin/Dashboard';
import { AuthProvider } from './contex/AuthContext';
import Footer from './view/Footer';
import Contact from './view/Contact';
import About from './view/About';
import Products from './view/Products';


function App() {

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product" element={<Products />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
        </CartProvider>
      </AuthProvider>

    </>
  )
}

export default App
