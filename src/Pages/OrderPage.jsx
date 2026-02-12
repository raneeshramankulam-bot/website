import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../Context/AuthContext';
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import './Order.css';

function OrderHistory() {
  const { authUser } = useAuth();
  const [orders, setOrders] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/orders?userId=${authUser?.id}`);

     
        setOrders(response.data.reverse());
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };
    if (authUser?.id) {
      fetchOrders();
    }
  }, [authUser]);

  if (loading) return <div className="loader">Loading your orders...</div>;

  return (
    <div>
      <Navbar />
      <div className="order-container">
        <h2>My Order History</h2>

        {orders.length === 0 ? (
          <p>You haven't placed any orders yet.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <p><strong>Order ID:</strong> #{order.id}</p>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </div>

              <div className="order-items">
                {order.items.map((item) => (
                  <div key={item.id} className="item-row">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="order-item-img"
                    />

                    <div className="item-details">
                      <span>{item.name} (x{item.quantity})</span>
                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-footer">
                <p><strong>Payment:</strong> {order.payment}</p>
                <p><strong>Total Amount:</strong> ₹{order.totalAmount}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}

export default OrderHistory;