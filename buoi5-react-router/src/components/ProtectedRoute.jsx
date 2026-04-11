import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

/**
 * Bài 6: Protected Route
 * Bảo vệ các trang cần đăng nhập.
 * Nếu chưa login → redirect về /login
 */
export default function ProtectedRoute({ children }) {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}
