import './App.css'
import Cart from './component/Cart';
import Login from './component/User/Login';
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
import Register from './component/User/Register';
import TabsMobile from './view/TabsMobile';
import { DarkModeProvider } from './contex/DarkModeContext';
import { SearchProvider } from './contex/SearchContext';
import Search from './component/Search';
import Checkout from './component/Checkout';
import Payment from './component/Payment';
import NotFound from './component/NotFound';
import Profile from './component/User/Profile';
import UpdateProfile from './component/User/UpdateProfile';
import { ProductProvider } from './contex/ProductContext';
import UserAdmin from './component/Admin/UserAdmin';
import ProtectedRoute from './component/router/ProtectedRoute';

function App() {
  return (
    <>
      <DarkModeProvider>
        <AuthProvider>
          <CartProvider>
            <ProductProvider>
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
                    <Route path="*" element={<NotFound />} />
                    <Route path="/repairOptions" element={<RepairOptions />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/tabs" element={<TabsMobile />} />
                    {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/me/update" element={<UpdateProfile />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route
                      path="/dashboard"
                      element={<ProtectedRoute isAdmin={true}><Dashboard /></ProtectedRoute>}
                    />
                  </Routes>
                  <TabsMobile />
                </Router>
              </SearchProvider>
            </ProductProvider>
          </CartProvider>
        </AuthProvider>
      </DarkModeProvider>
    </>
  )
}

export default App
