import { Link } from 'react-router-dom'

/**
 * Bài 2: Trang 404 Not Found
 * Hiển thị khi người dùng nhập sai URL (ví dụ: /abc, /xyz)
 * Kỹ thuật: <Route path="*" element={<NotFound />} />
 */
export default function NotFound() {
  return (
    <div className="page-container">
      <div className="page-404">
        <div className="page-404-code">404</div>
        <h2>Oops! Trang không tồn tại</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '400px' }}>
          Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/" className="btn btn-primary">
            🏠 Về trang chủ
          </Link>
          <Link to="/products" className="btn btn-secondary">
            🛍️ Xem sản phẩm
          </Link>
        </div>

        <div className="alert alert-warning" style={{ marginTop: '3rem', maxWidth: '500px' }}>
          ⚠️ <strong>Bài 2:</strong> Trang này được hiển thị khi truy cập URL không tồn tại. 
          Thử nhập <code>/abc</code> hoặc <code>/xyz</code> để kiểm tra!
        </div>
      </div>
    </div>
  )
}
