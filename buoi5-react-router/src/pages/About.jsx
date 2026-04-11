/**
 * Bài 1: About Page
 * Một trong 3 trang routing cơ bản: Home, About, Contact
 */
export default function About() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Về chúng tôi</h1>
        <p className="page-subtitle">
          Tìm hiểu thêm về Shop Công Nghệ – nơi mang đến những sản phẩm công nghệ tốt nhất.
        </p>
      </div>

      <div className="card-grid">
        <div className="card">
          <div className="feature-icon">🎯</div>
          <h3 className="feature-title">Sứ mệnh</h3>
          <p className="feature-desc">
            Mang đến trải nghiệm mua sắm công nghệ tuyệt vời nhất cho khách hàng Việt Nam 
            với sản phẩm chính hãng và dịch vụ chăm sóc khách hàng tận tâm.
          </p>
        </div>
        <div className="card">
          <div className="feature-icon">⚡</div>
          <h3 className="feature-title">Tầm nhìn</h3>
          <p className="feature-desc">
            Trở thành nền tảng thương mại điện tử hàng đầu trong lĩnh vực công nghệ, 
            kết nối người dùng với những đổi mới công nghệ mới nhất.
          </p>
        </div>
        <div className="card">
          <div className="feature-icon">💎</div>
          <h3 className="feature-title">Giá trị cốt lõi</h3>
          <p className="feature-desc">
            Chất lượng – Uy tín – Tận tâm. Mỗi sản phẩm đều được kiểm tra chất lượng 
            kỹ lưỡng trước khi đến tay khách hàng.
          </p>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <div className="alert alert-info">
          ℹ️ <strong>Bài 1 – React Router:</strong> Trang này sử dụng <code>{'<Link>'}</code> để chuyển trang không reload. 
          Kỹ thuật: BrowserRouter, Routes, Route, Link
        </div>
      </div>
    </div>
  )
}
