import React from 'react';
import { Users, DollarSign, TrendingUp, MoreVertical } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard container">
      <div className="admin-header">
        <h1 className="page-title">Admin Dashboard</h1>
        <button className="btn btn-primary">Generate Report</button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrapper turnover">
            <DollarSign size={24} color="#10B981" />
          </div>
          <div className="stat-info">
            <h3 className="stat-title">Turnover</h3>
            <p className="stat-value">$24,500</p>
            <span className="stat-change positive">+15% from last month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper profit">
            <TrendingUp size={24} color="#3B82F6" />
          </div>
          <div className="stat-info">
            <h3 className="stat-title">Profit</h3>
            <p className="stat-value">$12,400</p>
            <span className="stat-change positive">+8% from last month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper customers">
            <Users size={24} color="#8B5CF6" />
          </div>
          <div className="stat-info">
            <h3 className="stat-title">New Customers</h3>
            <p className="stat-value">1,250</p>
            <span className="stat-change positive">+22% from last month</span>
          </div>
        </div>
      </div>

      <div className="dashboard-section">
        <div className="section-header">
          <h2>Customer Management</h2>
          <div className="search-box">
            <input type="text" placeholder="Search customers..." />
          </div>
        </div>

        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Join Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="customer-info">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="Avatar" className="table-avatar" />
                    <span>John Doe</span>
                  </div>
                </td>
                <td>john@example.com</td>
                <td>Oct 24, 2023</td>
                <td><span className="badge active">Active</span></td>
                <td><button className="action-btn"><MoreVertical size={16} /></button></td>
              </tr>
              <tr>
                <td>
                  <div className="customer-info">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" alt="Avatar" className="table-avatar" />
                    <span>Jane Smith</span>
                  </div>
                </td>
                <td>jane@example.com</td>
                <td>Nov 02, 2023</td>
                <td><span className="badge inactive">Inactive</span></td>
                <td><button className="action-btn"><MoreVertical size={16} /></button></td>
              </tr>
              <tr>
                <td>
                  <div className="customer-info">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" alt="Avatar" className="table-avatar" />
                    <span>Alice Johnson</span>
                  </div>
                </td>
                <td>alice@example.com</td>
                <td>Dec 15, 2023</td>
                <td><span className="badge active">Active</span></td>
                <td><button className="action-btn"><MoreVertical size={16} /></button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
