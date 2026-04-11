import { Link } from 'react-router-dom'
import { products, formatPrice } from '../../data/products'
import { useCart } from '../../context/CartContext'

/**
 * Bài 3: Products Page - Danh sách sản phẩm
 * Click vào sản phẩm → /products/:id (Dynamic Route)
 * Kỹ thuật: useParams()
 */
export default function Products() {
  const { addToCart } = useCart()

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Sản phẩm</h1>
        <p className="page-subtitle">
          Khám phá bộ sưu tập sản phẩm công nghệ mới nhất
        </p>
      </div>

      <div className="card-grid">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="product-card"
            style={{ animation: `fadeInUp 0.5s ease ${index * 0.1}s both` }}
          >
            <Link to={`/products/${product.id}`}>
              <div className="product-image">
                <span style={{ position: 'relative', zIndex: 1 }}>{product.emoji}</span>
              </div>
              <div className="product-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 className="product-name">{product.name}</h3>
                    <span className="meta-badge">{product.category}</span>
                  </div>
                  {!product.inStock && (
                    <span className="status-badge cancelled">Hết hàng</span>
                  )}
                </div>
                <p className="product-desc" style={{ 
                  display: '-webkit-box', 
                  WebkitLineClamp: 2, 
                  WebkitBoxOrient: 'vertical', 
                  overflow: 'hidden' 
                }}>
                  {product.description}
                </p>
                <div className="product-price" style={{ marginTop: '0.75rem' }}>
                  {formatPrice(product.price)}
                </div>
              </div>
            </Link>
            <div style={{ padding: '0 1.25rem 1.25rem' }}>
              <button
                className="btn btn-primary"
                style={{ width: '100%' }}
                disabled={!product.inStock}
                onClick={(e) => {
                  e.preventDefault()
                  addToCart(product)
                }}
              >
                {product.inStock ? '🛒 Thêm vào giỏ' : '❌ Hết hàng'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="alert alert-info" style={{ marginTop: '2rem' }}>
        ℹ️ <strong>Bài 3 – Dynamic Route:</strong> Click vào sản phẩm để xem chi tiết tại URL <code>/products/:id</code>. 
        Sử dụng <code>useParams()</code> để lấy Product ID.
      </div>
    </div>
  )
}
