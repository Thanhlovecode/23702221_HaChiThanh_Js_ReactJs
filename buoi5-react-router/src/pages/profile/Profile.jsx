import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

/**
 * Bài 6: Protected Route - Profile
 * Trang cá nhân chỉ truy cập được khi đã đăng nhập
 */
export default function Profile() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Hồ sơ cá nhân</h1>
        <p className="page-subtitle">Quản lý tài khoản của bạn</p>
      </div>

      <div className="profile-header">
        <div className="profile-avatar">
          {user?.avatar || 'U'}
        </div>
        <div>
          <h2 className="profile-name">{user?.username || 'User'}</h2>
          <p className="profile-email">{user?.email || 'user@example.com'}</p>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat-card">
          <div className="stat-value">12</div>
          <div className="stat-label">Đơn hàng</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">3</div>
          <div className="stat-label">Đánh giá</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">2500</div>
          <div className="stat-label">Điểm thưởng</div>
        </div>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
        <button className="btn btn-danger" onClick={handleLogout}>
          🚪 Đăng xuất
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/dashboard/profile')}>
          ✏️ Chỉnh sửa hồ sơ
        </button>
      </div>

      <div className="alert alert-success" style={{ marginTop: '2rem' }}>
        ✅ <strong>Bài 6 – Protected Route:</strong> Bạn đang ở trang Profile. 
        Nếu chưa đăng nhập, hệ thống sẽ tự động chuyển hướng bạn về trang Đăng nhập.
      </div>
    </div>
  )
}
