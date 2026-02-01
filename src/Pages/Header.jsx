import { Routes , Route } from "react-router-dom"
import Login from "./Auth/Login"
import Home from "./Home"
import Signup from "./Auth/Signup"
function Header() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default Header