import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

/**
 * Bài 6: Login Page
 * Nếu chưa login, truy cập /profile hoặc /orders sẽ redirect về đây.
 * Sau khi login thành công → vào được các trang protected.
 */
export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login, user } = useAuth()
  const navigate = useNavigate()

  if (user) {
    return (
      <div className="page-container">
        <div className="login-container">
          <div className="login-card" style={{ textAlign: 'center' }}>
            <div className="login-icon">👤</div>
            <h2 className="login-title">Đã đăng nhập</h2>
            <p className="login-subtitle">
              Xin chào, <strong>{user.username}</strong>! Bạn đã đăng nhập rồi.
            </p>
            <button className="btn btn-primary" onClick={() => navigate('/profile')}>
              Đi đến Profile →
            </button>
          </div>
        </div>
      </div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!username.trim() || !password.trim()) {
      setError('Vui lòng nhập đầy đủ thông tin!')
      return
    }

    const success = login(username.trim(), password.trim())
    if (success) {
      navigate('/profile')
    } else {
      setError('Đăng nhập thất bại!')
    }
  }

  return (
    <div className="page-container">
      <div className="login-container">
        <div className="login-card">
          <div className="login-icon">🔐</div>
          <h2 className="login-title">Đăng nhập</h2>
          <p className="login-subtitle">Nhập thông tin để tiếp tục</p>

          {error && (
            <div className="alert alert-error">❌ {error}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Tên đăng nhập</label>
              <input
                className="form-input"
                type="text"
                placeholder="Nhập tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Mật khẩu</label>
              <input
                className="form-input"
                type="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              🚀 Đăng nhập
            </button>
          </form>

          <div className="alert alert-info" style={{ marginTop: '1.5rem' }}>
            ℹ️ <strong>Bài 6:</strong> Nhập bất kỳ username/password nào để đăng nhập. 
            Nếu chưa login, truy cập <code>/profile</code> sẽ redirect về trang này.
          </div>
        </div>
      </div>
    </div>
  )
}
