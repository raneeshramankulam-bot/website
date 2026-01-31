import { useState } from "react"
import "./Login.css"

function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  function HandilEmail(e){
    setEmail(e.target.value)
    setError("")
  }
  function HandilPassword(e){
    setPassword(e.target.value)
    setError("")
  }  
  function HandileSubmit(e){
    e.preventDefault()
  }
  return(
    <div>
        <form onSubmit={HandileSubmit}>
          <h1>Login</h1>
          <div>
            <input 
              value={email} 
              type="email" 
              placeholder="Enter Email" 
              onChange={HandilEmail} 
            />
          </div>
          <div>
            <input 
              value={password} 
              type="password"
              placeholder="Password"
              onChange={HandilPassword}
            />
            <button onClick={setShowPassword((e)=>)}></button>
          </div>
          <div>
            <button type="submit">Login</button>
          </div>


        </form>
    </div>
  )
}

export default Login