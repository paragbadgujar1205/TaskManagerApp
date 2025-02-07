import { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import '../assets/login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      console.log("Logged in:", res.data);
      document.writeln("login succesful");
    } catch (error) {
      console.error("Login failed");
    }
  };

  return (
    <>
      <div className="container col-md-4 col-10 border border-black border-1 rounded ">
      <h1 className="text-center">login</h1>
        <form class="row g-3 p-4">
          <div class="col-12">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              aria-label="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="col-12">
            <input
              type="password"
              className="form-control"
              placeholder="password"
              aria-label="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p><Link to="/register">New User?</Link></p>
          <div class="col-12">
            <button type="submit" className="btn btn-primary mt-3" onClick={handleLogin}>
              log in
            </button>
          </div>
        </form>
      </div>
      {/* <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      /> */}
      {/* <button onClick={handleLogin}>Login</button> */}
    </>
  );
};

export default Login;
