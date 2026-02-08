import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Login from "./Pages/Auth/Login"
import Signup from "./Pages/Auth/Signup"
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/Cart"
import Profile from "./Pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import CheckOut from "./Pages/CheckOut";
import OrderPage from "./Pages/OrderPage";
function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/Register" element={<Signup />} />
      <Route path="/order" element={<OrderPage/>}/>
      <Route path="/cart" element={
        <ProtectedRoute >
          <CartPage />
        </ProtectedRoute>
      } />
      <Route path="/admin" element={
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>
      } />
      <Route path="/checkout" element={
        <ProtectedRoute>
          <CheckOut />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default AppRoutes;
