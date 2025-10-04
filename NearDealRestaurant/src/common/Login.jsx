import axios from "axios";
import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/login", {
        username: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data === "success") {
          navigate("/home");
        } else {
          alert("Enter valid user name");
        }
      })
      .catch((error) => {
        alert("Enter valid user name");
        console.error("Opps login fail", error);
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <Link to="/signup">Don't have an account? Sign-up</Link>
    </div>
  );
}

export default Login;