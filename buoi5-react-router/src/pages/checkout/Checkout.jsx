import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

/**
 * Bài 5: Checkout Page
 * Hiển thị "Thanh toán thành công" sau khi useNavigate("/checkout")
 */
export default function Checkout() {
  const { clearCart } = useCart()

  const handleDone = () => {
    clearCart()
  }

  return (
    <div className="page-container">
      <div className="checkout-success">
        <div className="checkout-check">✓</div>
        <h1>Thanh toán thành công! 🎉</h1>
        <p>
          Đơn hàng của bạn đã được xác nhận. Chúng tôi sẽ giao hàng trong 2-3 ngày.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/" className="btn btn-primary" onClick={handleDone}>
            🏠 Về trang chủ
          </Link>
          <Link to="/products" className="btn btn-secondary" onClick={handleDone}>
            🛍️ Tiếp tục mua sắm
          </Link>
        </div>

        <div className="alert alert-success" style={{ marginTop: '3rem', maxWidth: '500px' }}>
          ✅ <strong>Bài 5 – useNavigate:</strong> Trang này được hiển thị sau khi 
          sử dụng <code>navigate("/checkout")</code> từ nút "Mua hàng" ở Product Detail.
        </div>
      </div>
    </div>
  )
}
