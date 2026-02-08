import { Navigate} from "react-router-dom"
import { useAuth } from "../Context/AuthContext"
import { toast } from "react-toastify"

const ProtectedRoute = ({children , adminOnly = false})=>{
    const {authUser, loading} = useAuth()
    
    if(loading){
        return null
    }
    
    if(!authUser){
        
         return <Navigate to="/login" replace/>
        
    }

    if(adminOnly && authUser.role !== "admin"){
        return <Navigate to="/" replace/>
    }
    return children
}
export default ProtectedRoute