import { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area
} from "recharts";
import "./AdminDasbord.css";

function AdminDashboard() {
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {

    try {
      axios.get("http://localhost:3000/users")
        .then((res) => setUser(res.data))
      axios.get("http://localhost:3000/products")
        .then((res) => setProduct(res.data))
      axios.get("http://localhost:3000/orders")
        .then((res) => setOrder(res.data))
    } catch (error) {
      console.error("Failed to load dashboard data", error);
    }

  }, []);


  const Users = user.filter((item) => item.role !== "admin");


  const totalRevenue = order.reduce((acc, item) => acc + item.totalAmount, 0);


  const recentOrders = [...order].reverse().slice(0, 5);
  console.log(recentOrders)

  const graphData = order.map(ord => ({
    date: ord.orderDate.split(',')[0],
    amount: ord.totalAmount
  }));

  return (
    <div className="admin-dashboard">
    
      <div className="stats-grid">
        <div className="stat-card">
          <h4>Total Revenue</h4>
          <p className="stat-value">₹{totalRevenue.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h4>Active Users</h4>
          <p className="stat-value">{Users.length}</p>
        </div>
        <div className="stat-card">
          <h4>Total Products</h4>
          <p className="stat-value">{product.length}</p>
        </div>
        <div className="stat-card">
          <h4>Orders</h4>
          <p className="stat-value">{order.length}</p>
        </div>
      </div>

      <div className="dashboard-content">

        <div className="chart-container">
          <h3>Revenue Analytics</h3>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer  width="100%" height="100%">
              <AreaChart data={graphData}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="amount" stroke="#8884d8" fillOpacity={1} fill="url(#colorAmount)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>


        <div className="recent-orders-container">
          <h3>Recent Orders</h3>
          <table className="admin-table">
            <thead>
              <tr>
                <th>order Id</th>
                <th>Customer</th>
                <th>date</th>
                <th>payment</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((ord) => (
                <tr key={ord.id}>
                  <td>{ord.id}</td>
                  <td>
                    <strong>{ord.shippingDetails.fullName}</strong>
                    <br />
                    <small>{ord.shippingDetails.city}</small>
                  </td>
                  <td>{ord.orderDate}</td>
                  <td>{ord.payment}</td>
                  <td>₹{ord.totalAmount}</td>
                  <td>
                    <span className={`status-pill ${ord.status.toLowerCase()}`}>
                      {ord.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;