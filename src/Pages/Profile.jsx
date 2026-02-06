import { useAuth } from "../Context/AuthContext"

function Profile() {
  const {authUser ,logout} = useAuth()
    function handileLogout() {

        logout()

        toast.success("Logged out")

    }
  return (
    <div>Profile
        {authUser ? (

                        <button onClick={handileLogout} className="nav-button">logout</button>

                    ) : (

                        <button onClick={() => navigate("/login")} className="nav-button">

                            Login

                        </button>

        )}
    </div>
  )
}

export default Profile