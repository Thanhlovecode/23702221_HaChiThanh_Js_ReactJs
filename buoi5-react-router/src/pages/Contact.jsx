import { useState } from 'react'

/**
 * Bài 1: Contact Page
 * Một trong 3 trang routing cơ bản: Home, About, Contact
 */
export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Liên hệ</h1>
        <p className="page-subtitle">
          Bạn có câu hỏi? Hãy liên hệ với chúng tôi ngay.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div>
          {submitted && (
            <div className="alert alert-success">
              ✅ Tin nhắn đã được gửi thành công! Chúng tôi sẽ phản hồi sớm.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Họ và tên</label>
              <input className="form-input" type="text" placeholder="Nguyễn Văn A" required />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" type="email" placeholder="email@example.com" required />
            </div>
            <div className="form-group">
              <label className="form-label">Tin nhắn</label>
              <textarea
                className="form-input"
                rows={5}
                placeholder="Nội dung tin nhắn..."
                required
                style={{ resize: 'vertical' }}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              📩 Gửi tin nhắn
            </button>
          </form>
        </div>

        <div>
          <div className="card" style={{ marginBottom: '1rem' }}>
            <h3 className="feature-title">📍 Địa chỉ</h3>
            <p className="feature-desc">123 Đường ABC, Quận 1, TP.HCM</p>
          </div>
          <div className="card" style={{ marginBottom: '1rem' }}>
            <h3 className="feature-title">📞 Điện thoại</h3>
            <p className="feature-desc">0123 456 789</p>
          </div>
          <div className="card" style={{ marginBottom: '1rem' }}>
            <h3 className="feature-title">✉️ Email</h3>
            <p className="feature-desc">contact@shopcongnghe.vn</p>
          </div>
          <div className="card">
            <h3 className="feature-title">🕐 Giờ làm việc</h3>
            <p className="feature-desc">Thứ 2 – Thứ 7: 8:00 – 21:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
