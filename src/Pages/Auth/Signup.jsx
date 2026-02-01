import { useState } from "react"

function Signup() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const nameRegex = /^[A-Za-z ]{2,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [error, setError] = useState({});
  function HandileInput(e) {
    const Name = e.target.name
    const Value = e.target.value
    setInput({
      ...input,
      [Name]: Value
    })
  };
  function HandileSubmit(e) {
    e.preventDefault()
  };

  return (
    <div>
      <form onSubmit={HandileSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter-userName"
            value={input.username}
            onChange={HandileInput}
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter-email"
            value={input.email}
            onChange={HandileInput}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter-password"
            value={input.password}
            onChange={HandileInput}
            required
          />
        </div>

        <button type="submit">Register</button>

      </form>
    </div>
  )
}

export default Signup