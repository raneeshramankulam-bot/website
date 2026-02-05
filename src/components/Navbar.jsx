import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import "./Navbar.css"
import { useAuth } from "../Context/AuthContext";
import { toast } from "react-toastify";
function Navbar() {
    const navigate = useNavigate();
    const { authUser, logout } = useAuth()
    function handileLogout() {
        logout()
        toast.success("Logged out")
    }
    return (
        <div>
            <nav className='navbar'>
                <div className='logo-left'>
                    <h1 className='logo'>STRIDE</h1>
                </div>


                <ul>
                    <li className="link">
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li className="link">
                        <NavLink to={"/shop"}>Shop</NavLink>
                    </li>
                    <li className="link">
                        <NavLink to={"/Contact"}>Contact</NavLink>
                    </li>
                </ul>
                <div className="nav-right">
                    {authUser ? (
                        <button onClick={handileLogout} className="nav-button">logout</button>
                    ) : (
                        <button onClick={() => navigate("/login")} className="nav-button">
                            Login
                        </button>
                    )}
                    <NavLink to="/cart" className="icon-link cart">
                        <FaOpencart />
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar