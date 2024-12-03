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
import Contact from './view/Contact';
import About from './view/About';
import Book from './view/Book';
import RepairOptions from './view/RepairOptions';
import Register from './component/Register';
import TabsMobile from './view/TabsMobile';
import { DarkModeProvider } from './contex/DarkModeContext';
import { SearchProvider } from './contex/SearchContext';
import Search from './component/Search';

function App() {
  return (
    <>
      <DarkModeProvider>
        <AuthProvider>
          <CartProvider>
            <SearchProvider>
              <Router>
                <Navbar />
                <Routes>
                  <Route path="/" element={<ProductList />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/book" element={<Book />} />
                  <Route path="/product/:productId" element={<ProductDetail />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/repairOptions" element={<RepairOptions />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/tabs" element={<TabsMobile />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
                <TabsMobile />
              </Router>
            </SearchProvider>
          </CartProvider>
        </AuthProvider>
      </DarkModeProvider>
    </>
  )
}

export default App
