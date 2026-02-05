import { createContext, useContext, useState, useEffect} from "react";

const Authcontext = createContext()

export const Authprovider = ({children}) => {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const SavedUser = localStorage.getItem("AuthUser")
        if (SavedUser) { setAuthUser(JSON.parse(SavedUser)) }
    }, [])

    const Login = (userData) => {
        setAuthUser(userData);
        localStorage.setItem("AuthUser", JSON.stringify(userData));
    }

    const logout = () => {
        setAuthUser(null),
            localStorage.removeItem("AuthUser")
    }

    return (
        <Authcontext.Provider value={{ authUser, Login, logout }}>
            {children}
        </Authcontext.Provider>
    )
}

export const useAuth = () => useContext(Authcontext)