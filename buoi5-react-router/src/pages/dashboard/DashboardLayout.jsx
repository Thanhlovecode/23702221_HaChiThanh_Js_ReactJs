import { NavLink, Outlet } from 'react-router-dom'

/**
 * Bài 4: Dashboard Layout – Nested Routes
 * Route lồng nhau với Outlet
 * Menu: Profile, Orders, Settings
 * URL: /dashboard/profile, /dashboard/orders, /dashboard/settings
 */
export default function DashboardLayout() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Quản lý tài khoản và đơn hàng của bạn</p>
      </div>

      <div className="dashboard-layout">
        <nav className="dashboard-sidebar">
          <div className="sidebar-title">Menu</div>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <span className="sidebar-link-icon">👤</span>
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/orders"
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <span className="sidebar-link-icon">📦</span>
            Orders
          </NavLink>
          <NavLink
            to="/dashboard/settings"
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <span className="sidebar-link-icon">⚙️</span>
            Settings
          </NavLink>
        </nav>

        <div className="dashboard-content">
          {/* Bài 4: Outlet – Hiển thị nội dung nested route */}
          <Outlet />
        </div>
      </div>

      <div className="alert alert-info" style={{ marginTop: '2rem' }}>
        ℹ️ <strong>Bài 4 – Nested Routes:</strong> Dashboard sử dụng <code>{'<Outlet />'}</code> để 
        render các route con. Menu sidebar luôn hiển thị, nội dung thay đổi theo URL.
      </div>
    </div>
  )
}
