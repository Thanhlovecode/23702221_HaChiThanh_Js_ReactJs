import { useParams, useNavigate, Link } from 'react-router-dom'
import { products, formatPrice } from '../../data/products'
import { useCart } from '../../context/CartContext'

/**
 * Bài 3: Product Detail – Dynamic Route với useParams()
 * Bài 5: Programmatic Navigation – useNavigate() cho nút "Mua hàng"
 * 
 * URL: /products/:id
 * Hiển thị chi tiết sản phẩm theo ID
 */
export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return (
      <div className="page-container">
        <div className="page-404">
          <div className="page-404-code" style={{ fontSize: '4rem' }}>🔍</div>
          <h2>Không tìm thấy sản phẩm</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Sản phẩm với ID: <strong>{id}</strong> không tồn tại.
          </p>
          <Link to="/products" className="btn btn-primary">
            ← Quay lại danh sách
          </Link>
        </div>
      </div>
    )
  }

  const handleBuyNow = () => {
    addToCart(product)
    // Bài 5: useNavigate() – Điều hướng bằng code
    navigate('/checkout')
  }

  return (
    <div className="page-container product-detail">
      <nav style={{ marginBottom: '1.5rem' }}>
        <Link to="/products" className="btn btn-secondary btn-sm">
          ← Quay lại
        </Link>
      </nav>

      <div className="product-detail-grid">
        <div className="product-detail-image">
          <span style={{ animation: 'float 3s ease-in-out infinite' }}>{product.emoji}</span>
        </div>

        <div className="product-detail-info">
          <div>
            <span className="meta-badge">{product.category}</span>
            <span className="meta-badge" style={{ marginLeft: '0.5rem' }}>{product.brand}</span>
            {product.inStock ? (
              <span className="status-badge delivered" style={{ marginLeft: '0.5rem' }}>Còn hàng</span>
            ) : (
              <span className="status-badge cancelled" style={{ marginLeft: '0.5rem' }}>Hết hàng</span>
            )}
          </div>

          <h1 className="product-detail-name">{product.name}</h1>
          <div className="product-detail-price">{formatPrice(product.price)}</div>
          <p className="product-detail-desc">{product.description}</p>

          <div className="product-detail-meta">
            {product.specs.map((spec, i) => (
              <span key={i} className="meta-badge">✦ {spec}</span>
            ))}
          </div>

          <div className="alert alert-info" style={{ marginTop: '0.5rem' }}>
            ℹ️ <strong>Product ID:</strong> {product.id} — Lấy từ <code>useParams()</code>
          </div>

          <div className="product-detail-actions">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => addToCart(product)}
              disabled={!product.inStock}
            >
              🛒 Thêm vào giỏ
            </button>
            <button
              className="btn btn-success btn-lg"
              onClick={handleBuyNow}
              disabled={!product.inStock}
            >
              ⚡ Mua ngay
            </button>
          </div>

          <div className="alert alert-warning" style={{ marginTop: '1rem' }}>
            ⚠️ <strong>Bài 5 – useNavigate:</strong> Nút "Mua ngay" sử dụng <code>navigate("/checkout")</code> để 
            điều hướng bằng code sau khi click.
          </div>
        </div>
      </div>
    </div>
  )
}
