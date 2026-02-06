import { NavLink, useNavigate } from "react-router-dom";
import { FaOpencart, FaUserCircle } from "react-icons/fa"; // Added User Icon
import "./Navbar.css";
import { useAuth } from "../Context/AuthContext";
import { useCart } from "../Context/CartContex";

function Navbar() {
    const { cart } = useCart();
    const navigate = useNavigate();
    const { authUser } = useAuth(); // We'll handle logout inside the Profile page

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo-left" onClick={() => navigate("/")}>
                <h1 className="logo">STRIDE</h1>
            </div>

            {/* Navigation Links */}
            <ul className="nav-menu">
                <li className="link">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="link">
                    <NavLink to="/shop">Shop</NavLink>
                </li>
                <li className="link">
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
            </ul>

            {/* Icons & Auth */}
            <div className="nav-right">
                {/* Cart with Badge */}
                <NavLink to="/cart" className="cart-wrapper">
                    <FaOpencart className="nav-icon" />
                    {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
                </NavLink>

                {/* Profile/Login Logic */}
                {authUser ? (
                    <NavLink to="/profile" className="profile-link">
                        <FaUserCircle className="nav-icon" />
                        <span className="profile-text">{authUser.name}</span>
                    </NavLink>
                ) : (
                    <button onClick={() => navigate("/login")} className="login-btn">
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;