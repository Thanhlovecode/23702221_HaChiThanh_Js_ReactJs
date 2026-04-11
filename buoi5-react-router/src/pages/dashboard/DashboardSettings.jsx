import { useState } from 'react'

/**
 * Bài 4: Dashboard Settings – Nested Route
 * URL: /dashboard/settings
 */
export default function DashboardSettings() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>⚙️ Cài đặt hệ thống</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          paddingBottom: '1.5rem', 
          borderBottom: '1px solid var(--border)' 
        }}>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Thông báo email</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Nhận thông báo về đơn hàng và khuyến mãi mới
            </p>
          </div>
          <button 
            className={`btn ${notifications ? 'btn-success' : 'btn-secondary'}`}
            onClick={() => setNotifications(!notifications)}
          >
            {notifications ? 'Bật' : 'Tắt'}
          </button>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Chế độ tối (Dark Mode)</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Giao diện sáng/tối cho website
            </p>
          </div>
          <button 
            className={`btn ${darkMode ? 'btn-success' : 'btn-secondary'}`}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? 'Bật' : 'Tắt'}
          </button>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <button className="btn btn-danger">Xóa tài khoản</button>
        </div>
      </div>
    </div>
  )
}
