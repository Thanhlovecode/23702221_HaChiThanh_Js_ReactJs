import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Products
import Products from './pages/products/Products'
import ProductDetail from './pages/products/ProductDetail'

// Cart & Checkout
import Cart from './pages/cart/Cart'
import Checkout from './pages/checkout/Checkout'

// Auth & Profile
import Login from './pages/auth/Login'
import Profile from './pages/profile/Profile'
import ProtectedRoute from './components/ProtectedRoute'

// Dashboard (Nested Routes)
import DashboardLayout from './pages/dashboard/DashboardLayout'
import DashboardProfile from './pages/dashboard/DashboardProfile'
import DashboardOrders from './pages/dashboard/DashboardOrders'
import DashboardSettings from './pages/dashboard/DashboardSettings'

function App() {
  return (
    <>
      <Navbar />
      
      <main>
        {/* Khai báo hệ thống routing cho toàn bộ ứng dụng */}
        <Routes>
          {/* Bài 1: Routing cơ bản */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Bài 3: Dynamic Route */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />

          {/* Bài 4: Nested Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<DashboardProfile />} />
            <Route path="orders" element={<DashboardOrders />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>

          {/* Bài 5: Programmatic Navigation (useNavigate) */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* Bài 6: Protected Route */}
          <Route path="/login" element={<Login />} />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/orders" 
            element={
              <ProtectedRoute>
                <div className="page-container">
                  <div className="page-header">
                    <h1 className="page-title">Đơn hàng của tôi</h1>
                  </div>
                  <DashboardOrders />
                </div>
              </ProtectedRoute>
            } 
          />

          {/* Bài 2: Trang 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <footer style={{ 
        textAlign: 'center', 
        padding: '2rem', 
        borderTop: '1px solid var(--border)',
        color: 'var(--text-muted)',
        marginTop: 'auto'
      }}>
        <p>Buổi 5 - Thực hành React Router V6 © {new Date().getFullYear()}</p>
        <p style={{ fontSize: '0.875rem' }}>Phát triển bởi SV Hà Chí Thành</p>
      </footer>
    </>
  )
}

export default App
