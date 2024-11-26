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
import Book from './view/Book';
import RepairOptions from './view/RepairOptions';
import Register from './component/Register';


function App() {

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/book" element={<Book />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />
              <Route path="/repairOptions" element={<RepairOptions />} />
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
