import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css"
import { toast } from "react-toastify";
function Signup() {
  const Navigate = useNavigate()
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  function handleInput(e) {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const [error, setError] = useState({})

  function ValidateFrom() {
    let Newerror = {}
    const usernameRegex = /^[A-Za-z]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^.{6,}$/;

    if (!usernameRegex.test(input.username)) {
      Newerror.user = ("Username must be at least 3 letters");
    }
    if (!emailRegex.test(input.email)) {
      Newerror.email = "invalid email"
    }
    if (!passwordRegex.test(input.password)) {
      Newerror.password = "Password must be at least 6 characters"
    }
    setError(Newerror)
    return (Object.keys(Newerror).length === 0)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!ValidateFrom()) {
      return;
    }

    try {
      const res = await axios.get("http://localhost:3000/users")
      const users = res.data
      if (users.find(user => user.email === input.email)) {
        setError({ email: "Email already exists" });
        return;
      }
      await axios.post("http://localhost:3000/users", input);
      setInput({ username: "", email: "", password: "" });
      setError({});
      toast.success("Registration successful!");
      setTimeout(()=>{
        Navigate("/Login")
      },3000)

    } catch (error) {
      console.error("Error registering user:", error);
      setError({ general: "Server error, please try again" })

    }

  }

  return (
    <div className="signup-continer">
      <form className="signup-form" onSubmit={handleSubmit}>

        <h2 className="signup-title">Create Account</h2>

        <div className="form-group">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter-userName"
            value={input.username}
            onChange={handleInput}

          />
          <p className="error-msg">{error.username}</p>
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter-email"
            value={input.email}
            onChange={handleInput}

          />
          <p className="error-msg">{error.email}</p>
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter-password"
            value={input.password}
            onChange={handleInput}

          />
          <p className="error-msg">{error.password}</p>
        </div>
        <button className="signup-btn" type="submit">Register</button>
      </form>
    </div>
  )
}

export default Signup