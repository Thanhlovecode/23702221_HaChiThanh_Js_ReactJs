import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

/**
 * Navbar - Menu điều hướng chính của website
 * Sử dụng NavLink để thêm class active khi URL hiện tại khớp với NavLink
 */
export default function Navbar() {
  const { totalItems } = useCart()
  const { user } = useAuth()

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand">
          <div className="brand-icon">🚀</div>
          ShopRouter
        </NavLink>

        <ul className="navbar-links">
          <li>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Dashboard
            </NavLink>
          </li>
        </ul>

        <ul className="navbar-links">
          <li>
            <NavLink to="/cart" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              🛒 Cart
              {totalItems > 0 && <span className="nav-link-badge">{totalItems}</span>}
            </NavLink>
          </li>
          {user ? (
            <li>
              <NavLink to="/profile" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ 
                    width: '20px', 
                    height: '20px', 
                    borderRadius: '50%', 
                    background: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.7rem',
                    fontWeight: 'bold'
                  }}>
                    {user.avatar}
                  </div>
                  Profile
                </div>
              </NavLink>
            </li>
          ) : (
            <li>
               <NavLink to="/login" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
