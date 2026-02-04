import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Auth/Home";
import Shop from "./Pages/Auth/Shop";
import Contact from "./Pages/Auth/Contact";
import Login from "./Pages/Auth/Login"
import Signup from "./Pages/Auth/Signup"
import ProductDetails from "./Pages/Auth/ProductDetails";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop/:productId" element={<ProductDetails/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Signup />} />

    </Routes>
  );
}

export default AppRoutes;
