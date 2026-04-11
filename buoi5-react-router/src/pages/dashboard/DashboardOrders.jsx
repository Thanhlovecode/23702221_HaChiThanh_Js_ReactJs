import { formatPrice } from '../../data/products'

/**
 * Bài 4: Dashboard Orders – Nested Route
 * URL: /dashboard/orders
 */
export default function DashboardOrders() {
  const mockOrders = [
    { id: '#ORD-001', date: '2023-11-20', total: 34990000, status: 'Đã giao' },
    { id: '#ORD-002', date: '2023-11-21', total: 6790000, status: 'Đang giao' },
    { id: '#ORD-003', date: '2023-11-25', total: 31990000, status: 'Chờ xử lý' },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Đã giao':
        return <span className="status-badge delivered">Đã giao</span>
      case 'Đang giao':
        return <span className="status-badge pending">Đang giao</span>
      case 'Chờ xử lý':
        return <span className="status-badge cancelled">Chờ xử lý</span>
      default:
        return null
    }
  }

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 1.5rem 0' }}>📦 Quản lý Đơn hàng</h2>
      
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Mã đơn</th>
              <th>Ngày đặt</th>
              <th>Tổng tiền</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map(order => (
              <tr key={order.id}>
                <td style={{ fontWeight: 600 }}>{order.id}</td>
                <td>{order.date}</td>
                <td style={{ fontWeight: 700, color: 'var(--primary)' }}>
                  {formatPrice(order.total)}
                </td>
                <td>{getStatusBadge(order.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
