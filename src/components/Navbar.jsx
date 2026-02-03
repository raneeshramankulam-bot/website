import { NavLink } from "react-router-dom"
import {FiUser, FiUserPlus} from "react-icons/fi";
import { FaOpencart } from "react-icons/fa";
import "./Navbar.css"
function Navbar() {

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
                    <NavLink to="/login" className="icon-link">
                        <FiUser />
                    </NavLink>

                    <NavLink to="/Register" className="icon-link">
                        <FiUserPlus />
                    </NavLink>

                    <NavLink to="/cart" className="icon-link cart">
                        <FaOpencart />
                    </NavLink>
                </div>
           </nav>
        </div>
    )
}

export default Navbar