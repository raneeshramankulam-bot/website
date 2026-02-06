import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Login from "./Pages/Auth/Login"
import Signup from "./Pages/Auth/Signup"
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/Cart"
import Profile from "./Pages/Profile";
function AppRoutes() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetails/>}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/Register" element={<Signup />} />
      <Route path="/cart" element={<CartPage/>}/>
    </Routes>
  );
}

export default AppRoutes;
