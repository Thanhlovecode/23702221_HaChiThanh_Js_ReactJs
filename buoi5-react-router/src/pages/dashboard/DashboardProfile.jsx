/**
 * Bài 4: Dashboard Profile – Nested Route
 * URL: /dashboard/profile
 */
export default function DashboardProfile() {
  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>👤 Profile</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
        Quản lý thông tin cá nhân của bạn
      </p>

      <div style={{ display: 'grid', gap: '1rem' }}>
        <div className="form-group">
          <label className="form-label">Họ và tên</label>
          <input className="form-input" type="text" defaultValue="Hà Chí Thành" />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input className="form-input" type="email" defaultValue="thanh@example.com" />
        </div>
        <div className="form-group">
          <label className="form-label">Số điện thoại</label>
          <input className="form-input" type="tel" defaultValue="0123 456 789" />
        </div>
        <button className="btn btn-primary" style={{ width: 'fit-content' }}>
          💾 Lưu thay đổi
        </button>
      </div>
    </div>
  )
}
