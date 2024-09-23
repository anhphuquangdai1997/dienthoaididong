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


function App() {

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product" element={<ProductList />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Footer/>
          </Router>
        </CartProvider>
      </AuthProvider>

    </>
  )
}

export default App
