import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../data/products'

/**
 * Bài 7: Cart Page – Giỏ hàng
 * Hiển thị danh sách sản phẩm đã thêm, quản lý số lượng, thanh toán
 */
export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()

  const handleCheckout = () => {
    navigate('/checkout')
  }

  if (cartItems.length === 0) {
    return (
      <div className="page-container">
        <div className="cart-empty">
          <div className="cart-empty-icon">🛒</div>
          <h2 style={{ marginBottom: '0.5rem' }}>Giỏ hàng trống</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Bạn chưa có sản phẩm nào trong giỏ hàng.
          </p>
          <Link to="/products" className="btn btn-primary">
            🛍️ Mua sắm ngay
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Giỏ hàng</h1>
        <p className="page-subtitle">
          Bạn có {cartItems.length} sản phẩm trong giỏ hàng
        </p>
      </div>

      <div className="cart-list">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image">
              {item.emoji}
            </div>
            <div className="cart-item-info">
              <Link to={`/products/${item.id}`} className="cart-item-name" style={{ color: 'var(--text-primary)' }}>
                {item.name}
              </Link>
              <div className="cart-item-price">{formatPrice(item.price)}</div>
            </div>
            <div className="cart-item-qty">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <div style={{ fontWeight: 700, minWidth: '120px', textAlign: 'right' }}>
              {formatPrice(item.price * item.quantity)}
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeFromCart(item.id)}
            >
              🗑️
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-summary-row">
          <span>Tạm tính</span>
          <span>{formatPrice(totalPrice)}</span>
        </div>
        <div className="cart-summary-row">
          <span>Phí vận chuyển</span>
          <span style={{ color: 'var(--success)' }}>Miễn phí</span>
        </div>
        <div className="cart-summary-row">
          <span style={{ fontWeight: 700 }}>Tổng cộng</span>
          <span className="cart-summary-total">{formatPrice(totalPrice)}</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button className="btn btn-danger" onClick={clearCart}>
            🗑️ Xóa tất cả
          </button>
          <button className="btn btn-success btn-lg" style={{ flex: 1 }} onClick={handleCheckout}>
            ⚡ Thanh toán
          </button>
        </div>
      </div>
    </div>
  )
}
