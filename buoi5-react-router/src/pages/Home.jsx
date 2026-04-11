import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

/**
 * Bài 1: Home Page - Trang chủ
 * Hiển thị hero section và features
 */
export default function Home() {
  const { user } = useAuth()

  return (
    <div className="page-container">
      <div className="hero">
        <h1 className="hero-title">
          {user ? `Xin chào, ${user.username}! 👋` : 'Shop Công Nghệ'}
          <br />
          Buổi 5 – React Router
        </h1>
        <p className="hero-desc">
          Khám phá các bài tập thực hành React Router V6: Routing cơ bản, 
          Dynamic Route, Nested Routes, Protected Route và Mini Project Shop.
        </p>
        <div className="hero-actions">
          <Link to="/products" className="btn btn-primary btn-lg">
            🛍️ Xem sản phẩm
          </Link>
          <Link to="/dashboard" className="btn btn-secondary btn-lg">
            📊 Dashboard
          </Link>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🧭</div>
          <h3 className="feature-title">React Router V6</h3>
          <p className="feature-desc">
            Sử dụng BrowserRouter, Routes, Route và Link để điều hướng không reload trang.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3 className="feature-title">Protected Routes</h3>
          <p className="feature-desc">
            Bảo vệ trang cần đăng nhập bằng Context API và Navigate component.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🛒</div>
          <h3 className="feature-title">Mini Shop</h3>
          <p className="feature-desc">
            Website bán hàng hoàn chỉnh với giỏ hàng, thanh toán và quản lý đơn hàng.
          </p>
        </div>
      </div>
    </div>
  )
}
