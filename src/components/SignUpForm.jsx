import { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );
      const result = await response.json();
      setToken(result.token);
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }

  //   const submit = (e) => {
  //     e.preventDefault();
  //     const obj = {
  //       username,
  //       password,
  //     };
  //     console.log(obj);
  //   };

  return (
    <div>
      <h2> Sign up!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}
